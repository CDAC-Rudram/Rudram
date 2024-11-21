package com.app.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing user information in the database.
 */
@Data
@Entity
@NoArgsConstructor  // Generates a no-argument constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class UserInfo {

    // Primary key for the UserInfo entity, automatically generated
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    // User's phone number, which must be unique in the database
    @Column(unique = true)
    private String phoneNumber;

    // The user's role (e.g., admin, user, etc.)
    private String role;
    
    

	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
}
