package com.app.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.DonorRepository;
import com.app.entity.Donor;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;

    public Optional<Donor> getDonorByPhoneNumber(String phoneNumber) {
        return donorRepository.findByPhoneNumber(phoneNumber);
    }

    public Donor updateBloodType(String phoneNumber, String bloodType) {
        Donor donor = donorRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("Donor not found"));
        donor.setBloodType(bloodType);
        return donorRepository.save(donor);
    }

   

    public String grantCoupon(String phoneNumber) {
        Donor donor = donorRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("Donor not found"));

        if (donor.getAge() >= 18 && donor.getAge() <= 35) {
            // Update the donation date to the current date
            donor.setDonationDate(LocalDate.now());

            // Save the updated donor record to the database
            donorRepository.save(donor);

            return "Coupon granted to " + donor.getName();
        } else {
            return "Coupon not granted due to age constraints.";
        }
    }

}