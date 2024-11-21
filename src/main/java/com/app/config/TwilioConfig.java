package com.app.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Configuration class for Twilio API credentials.
 * 
 * This class is used to map the Twilio properties defined in the 
 * application's configuration file (e.g., application.properties or application.yml).
 */
@Configuration
@ConfigurationProperties(prefix = "twilio") // Maps properties with the prefix 'twilio' to this class
@Data // Generates getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Generates a no-argument constructor
@AllArgsConstructor // Generates an all-arguments constructor
@Getter
@Setter
public class TwilioConfig {
    
    // Twilio Account SID
    private String accountSid;
    
    // Twilio Auth Token
    private String authToken;
    
    // Twilio Phone Number (sender's number)
    private String phoneNumber;

	public String getAccountSid() {
		return accountSid;
	}

	public void setAccountSid(String accountSid) {
		this.accountSid = accountSid;
	}

	public String getAuthToken() {
		return authToken;
	}

	public void setAuthToken(String authToken) {
		this.authToken = authToken;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
    
    

}
