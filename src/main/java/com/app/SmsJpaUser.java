package com.app;

// Import necessary annotations and classes
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.app.config.TwilioConfig;
import com.twilio.Twilio;

/**
 * Main application class for the SMS service using JPA and Twilio.
 */
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class SmsJpaUser {

    // Injecting the TwilioConfig bean that holds Twilio credentials
    @Autowired
    private TwilioConfig twilioConfig;

    /**
     * Initializes the Twilio API with the account SID and auth token.
     * This method is called after the bean's properties have been initialized.
     */
    @PostConstruct
    public void setup() {
        // Initialize Twilio with the account SID and authentication token
        Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());
    }

    /**
     * Main method to start the Spring Boot application.
     * @param args Command line arguments
     */
    public static void main(String[] args) {
        // Launch the Spring Boot application
        SpringApplication.run(SmsJpaUser.class, args);        
    }

}
