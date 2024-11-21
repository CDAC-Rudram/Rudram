package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Donor;
import com.app.service.DonorService;

@CrossOrigin
@RestController
@RequestMapping("/api/donors")
public class DonorController {
	
	
	    @Autowired
	    private DonorService donorService;

	    @GetMapping("/{phoneNumber}")
	    public ResponseEntity<Donor> getDonor(@PathVariable String phoneNumber) {
	        Optional<Donor> donor = donorService.getDonorByPhoneNumber(phoneNumber);
	        return donor.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PutMapping("/{phoneNumber}/bloodType")
	    public ResponseEntity<Donor> updateBloodType(@PathVariable String phoneNumber, @RequestBody Donor donorRequest) {
	        Donor updatedDonor = donorService.updateBloodType(phoneNumber, donorRequest.getBloodType());
	        return ResponseEntity.ok(updatedDonor);
	    }
	    
	    

	    @PostMapping("/{phoneNumber}/grantCoupon")
	    public ResponseEntity<String> grantCoupon(@PathVariable String phoneNumber) {
	        String message = donorService.grantCoupon(phoneNumber);
	        return ResponseEntity.ok(message);
	    }
	}