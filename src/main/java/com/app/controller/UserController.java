package com.app.controller;

import com.app.dto.AuthResponse;
import com.app.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.UserInfo;
import com.app.service.UserService;

/**
 * Controller class that handles HTTP requests related to user operations such as sending and verifying OTPs.
 */
@CrossOrigin
@RestController
public class UserController {

    // Injecting the UserService to handle business logic
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * A simple test endpoint to verify if the application is running.
     * 
     * @return A welcome message as a string.
     */
    @GetMapping("/")
    public String test() {
        return "This is a welcome Message";
    }

    /**
     * Endpoint to send an OTP to the user's phone number.
     * 
     * @param userInfo The user information containing the phone number.
     * @return A message indicating whether the OTP was sent successfully.
     */
    @PostMapping("/SendOtp")
    public String sendOtp(@RequestBody UserInfo userInfo) {
        return userService.sendOtp(userInfo);
    }

    /**
     * Endpoint to verify the OTP entered by the user.
     * 
     * @param phoneNumber The user's phone number.
     * @param userOtp The OTP provided by the user.
     * @param role The user's role (if applicable).
     * @return A message indicating whether the OTP verification was successful.
     *         If successful, it might generate a token (as suggested by the comment).
     */
//    @PostMapping("/VerifyOtp")
//    public String verifyOtp(
//            @RequestParam("phoneNumber") String phoneNumber,
//            @RequestParam("userOtp") String userOtp,
//            @RequestParam("role") String role) {
//
//        return userService.verifyOtp(phoneNumber, userOtp, role); // Token generation could be handled here
//    }

    // Placeholder for a potential future endpoint for user login, which might involve Spring Security and authentication tokens
    // @PostMapping("/Login")
    
    // Commented out as it's not implemented yet but indicates future plans for security/authentication features
    // Spring Security might be integrated to handle authentication via auth tokens

    //
    

    @PostMapping("/VerifyOtp")
    public ResponseEntity<?> verifyOtp(
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("userOtp") String userOtp,
            @RequestParam("role") String role) {

        // Verify the OTP and check if it's valid
        String verificationResult = userService.verifyOtp(phoneNumber, userOtp, role);

        if (verificationResult.equals("OTP validated successfully")) {
            // OTP is valid, generate a JWT token
            String jwtToken = jwtUtil.generateToken(phoneNumber);
            // Return the token to the user in a response entity
            //return ResponseEntity.ok(new AuthResponse(jwtToken));
              return ResponseEntity.ok(new AuthResponse(jwtToken));
        } else {
            // OTP is invalid or another error occurred
            return ResponseEntity.status(401).body(verificationResult);
        }
    }
}


