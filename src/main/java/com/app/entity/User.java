package com.app.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class User {

	   
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotEmpty(message = "Full Name is required.")
	    private String fullName;

	    @NotEmpty(message = "Date of Birth is required.")
	    private String dob;

	    @NotEmpty(message = "Age is required.")
	    private String age;

	    @NotEmpty(message = "Gender is required.")
	    private String gender;

	    

	    
	    private String bloodGroup;

	   
	    @Email(message = "Email is invalid.")
	    @Column(unique = true)  // Unique constraint on email
	    private String email;

	   
	    @Size(min = 10, max = 10, message = "Mobile Number must be 10 digits.")
	    @Column(unique = true)  // Unique constraint on phone number
	    private String mobileNumber;

	   
	    private String address;

	   
	    private String state;

	    
	    private String district;

	 
	    @Pattern(regexp = "^[1-9][0-9]{5}$", message = "Pin Code is invalid.")
	    private String pinCode;
	    
	    private boolean isLiveDonor=true;
	    
	    @Column(name = "donationDate")
	    private LocalDate lastDonationDate;
//	    @JsonManagedReference
//	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//	    private List<Donor> donors;
	    
	     
	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private List<LiveDonor> livedonors;
	    
	    

		public User() {
			super();
		}

		

		public User(Long id, @NotEmpty(message = "Full Name is required.") String fullName,
				@NotEmpty(message = "Date of Birth is required.") String dob,
				@NotEmpty(message = "Age is required.") String age,
				@NotEmpty(message = "Gender is required.") String gender, String bloodGroup,
				@Email(message = "Email is invalid.") String email,
				@Size(min = 10, max = 10, message = "Mobile Number must be 10 digits.") String mobileNumber,
				String address, String state, String district,
				@Pattern(regexp = "^[1-9][0-9]{5}$", message = "Pin Code is invalid.") String pinCode,
				boolean isLiveDonor, LocalDate lastDonationDate) {
			super();
			this.id = id;
			this.fullName = fullName;
			this.dob = dob;
			this.age = age;
			this.gender = gender;
			this.bloodGroup = bloodGroup;
			this.email = email;
			this.mobileNumber = mobileNumber;
			this.address = address;
			this.state = state;
			this.district = district;
			this.pinCode = pinCode;
			this.isLiveDonor = isLiveDonor;
			this.lastDonationDate = lastDonationDate;
		}



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

		public String getDob() {
			return dob;
		}

		public void setDob(String dob) {
			this.dob = dob;
		}

		public String getAge() {
			return age;
		}

		public void setAge(String age) {
			this.age = age;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getBloodGroup() {
			return bloodGroup;
		}

		public void setBloodGroup(String bloodGroup) {
			this.bloodGroup = bloodGroup;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getState() {
			return state;
		}

		public void setState(String state) {
			this.state = state;
		}

		public String getDistrict() {
			return district;
		}

		public void setDistrict(String district) {
			this.district = district;
		}

		public String getPinCode() {
			return pinCode;
		}

		public void setPinCode(String pinCode) {
			this.pinCode = pinCode;
		}

		public boolean isLiveDonor() {
			return isLiveDonor;
		}

		public void setLiveDonor(boolean isLiveDonor) {
			this.isLiveDonor = isLiveDonor;
		}
		
		

		public LocalDate getLastDonationDate() {
			return lastDonationDate;
		}



		public void setLastDonationDate(LocalDate lastDonationDate) {
			this.lastDonationDate = lastDonationDate;
		}


//		public List<Donor> getDonors() {
//	        return donors;
//	    }
//	    public void setDonors(List<Donor> donors) {
//	        this.donors = donors;
//	    }



		public List<LiveDonor> getLivedonors() {
			return livedonors;
		}



		public void setLivedonors(List<LiveDonor> livedonors) {
			this.livedonors = livedonors;
		}
	    
	    
}
