package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class LiveDonor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Full Name is required.")
    private String fullName;

    @Size(min = 10, max = 10, message = "Mobile Number must be 10 digits.")
    private String mobileNumber;

    @NotEmpty(message = "State is required.")
    private String state;

    @NotEmpty(message = "City is required.")
    private String city;

    private String bloodGroup;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public LiveDonor() {
        super();
    }

    public LiveDonor(Long id, @NotEmpty(message = "Full Name is required.") String fullName,
                     @Size(min = 10, max = 10, message = "Mobile Number must be 10 digits.") String mobileNumber,
                     @NotEmpty(message = "State is required.") String state,
                     @NotEmpty(message = "City is required.") String city,
                     String bloodGroup) {
        super();
        this.id = id;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.state = state;
        this.city = city;
        this.bloodGroup = bloodGroup;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

    
}
