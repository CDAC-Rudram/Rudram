package com.app.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Donor;

public interface DonorRepository extends JpaRepository<Donor, Long> {
    Optional<Donor> findByPhoneNumber(String phoneNumber);
}