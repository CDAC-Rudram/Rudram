package com.app.service;

import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.Repo.UserRepository;
import com.app.config.TwilioConfig;
import com.app.entity.UserInfo;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class UserService {

    // In-memory cache to store OTPs temporarily
    private final ConcurrentMap<String, OtpRecord> otpCache = new ConcurrentHashMap<>();
    // OTP expiration time set to 5 minutes
    private static final long OTP_EXPIRATION_TIME_MS = TimeUnit.MINUTES.toMillis(5);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TwilioConfig twilioConfig;

    /**
     * Sends an OTP to the user's phone number via Twilio.
     * 
     * @param userInfo The user information containing the phone number.
     * @return A message indicating that the OTP was sent successfully.
     */
    public String sendOtp(UserInfo userInfo) {

        // Prepare the recipient and sender phone numbers for Twilio API
        PhoneNumber recipientPhoneNumber = new PhoneNumber(userInfo.getPhoneNumber());
        PhoneNumber senderPhoneNumber = new PhoneNumber(twilioConfig.getPhoneNumber());

        System.out.println(recipientPhoneNumber + " " + senderPhoneNumber);

        // Generate a random 6-digit OTP
        String otp = generateOtp();

        // Create the OTP message
        String otpMessage = "Your OTP is " + otp;

        // Send the OTP using Twilio's Message API
        Message message = Message.creator(recipientPhoneNumber, senderPhoneNumber, otpMessage).create();

        // Store the OTP and its creation timestamp in the in-memory cache
        otpCache.put(userInfo.getPhoneNumber(), new OtpRecord(otp, System.currentTimeMillis()));

        // Check if the user already exists in the database
        Optional<UserInfo> existingUser = userRepository.findByPhoneNumber(userInfo.getPhoneNumber());
        if (existingUser.isEmpty()) {  // New user case
            // Save the new user to the database if they don't exist
            userRepository.save(userInfo);
        }

        System.out.println(userInfo.getPhoneNumber());
        
        return "OTP sent successfully to user mobile number";

    }

    /**
     * Generates a random 6-digit OTP.
     * 
     * @return The generated OTP as a string.
     */
    private String generateOtp() {
        int otp = (int) (Math.random() * 1000000);
        return String.format("%06d", otp);
    }

    /**
     * Verifies the OTP provided by the user.
     * 
     * @param phoneNumber The user's phone number.
     * @param userOtp The OTP entered by the user.
     * @param role The role of the user (e.g., admin, user, etc.).
     * @return A message indicating the result of the OTP verification.
     */
    public String verifyOtp(String phoneNumber, String userOtp, String role) {
        System.out.println("Looking for user with phone number: " + phoneNumber);
        System.out.println(userOtp);
        // Retrieve the OTP record from the in-memory cache
        OtpRecord record = otpCache.get(phoneNumber);
   
        if (record == null) {
            // No OTP was found for the provided phone number
        	System.out.println("in here 1 ");
            return "No OTP found for this phone number.";
        }

        // Check if the OTP has expired
        if (System.currentTimeMillis() - record.getTimestamp() > OTP_EXPIRATION_TIME_MS) {
            otpCache.remove(phoneNumber); // Remove the expired OTP from the cache
            return "OTP has expired.";
        }

        // Verify if the provided OTP matches the stored OTP
        if (!record.getOtp().equals(userOtp)) {
            return "Invalid OTP.";
        }

        // Retrieve the user from the database using their phone number
        Optional<UserInfo> optionalUser = userRepository.findByPhoneNumber(phoneNumber);
        System.out.println("Looking for user with phone number: " + phoneNumber);

        if (optionalUser.isEmpty()) {
            // If the user does not exist, handle it as a new registration
            return handleNewUser(phoneNumber, role);
        } else {
            // User exists, check if the provided role matches the user's role
            UserInfo user = optionalUser.get();
            if (!user.getRole().equals(role)) {
                return "User role mismatch.";
            }
        }

        // OTP is valid, remove it from the cache
        otpCache.remove(phoneNumber);

        return "OTP validated successfully" ;
    }

    /**
     * Handles the registration of a new user.
     * 
     * @param phoneNumber The user's phone number.
     * @param role The role of the new user.
     * @return A message indicating the successful registration of the new user.
     */
    private String handleNewUser(String phoneNumber, String role) {
        // Create a new user entity with the provided phone number and role
        UserInfo newUser = new UserInfo();
        newUser.setPhoneNumber(phoneNumber);
        newUser.setRole(role);
        System.out.println("Registering new user with phone number: " + phoneNumber);

        // Save the new user to the database
        userRepository.save(newUser);

        return "New user registered successfully with phone number: " + phoneNumber;
    }

    /**
     * Inner class to represent an OTP record with the OTP and its creation timestamp.
     */
    private static class OtpRecord {
        private final String otp;
        private final long timestamp;

        public OtpRecord(String otp, long timestamp) {
            this.otp = otp;
            this.timestamp = timestamp;
        }

        public String getOtp() {
            return otp;
        }

        public long getTimestamp() {
            return timestamp;
        }
    }

    public UserInfo loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
        UserInfo user = userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with phone number: " + phoneNumber));
        
        return user;
    }
}
