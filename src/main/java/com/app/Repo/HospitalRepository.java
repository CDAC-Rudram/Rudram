package com.app.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.HospitalProfile;

public interface HospitalRepository extends JpaRepository<HospitalProfile, Long> {

}
