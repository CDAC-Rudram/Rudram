package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hospital_profile")
public class HospitalProfile {
	
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String hospitalName;
	    private String role;
	    private String creditLimitLeft;
	    private String creditLimit;
	    
	    // Contact Information
	    private String email;
	    private String mobileNumber;
	    private String category;
	    private String address;
	    private String state;
	    private String district;
	    private String pinCode;
	    private String country;
	    private String websiteUrl;
	    
	    // Authorized Person Details
	    private String fullName;
	    private String authorizedEmail;
	    private String aadhaarCard;
	    private String phoneNumber;
	    private String designationCertificate;
	    
	    // Bank Details
	    private String recipientName;
	    private String ifscCode;
	    private String accountNumber;
	    private String reEnterAccountNumber;
	    private String cancelledCheque;
	    
	    // Other Details
	    private String gstNumber;
	    private String panCard;
	    private String registrationCertificate;
	    
	    
	    
	    
	    

}

