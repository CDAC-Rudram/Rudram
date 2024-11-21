package com.app.service;

import com.app.Repo.HospitalRepository;
import com.app.entity.HospitalProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalProfileService {

    @Autowired
    private HospitalRepository hospitalRepository;

    public HospitalProfile saveProfile(HospitalProfile profile) {
        return hospitalRepository.save(profile);
    }

    public List<HospitalProfile> getAllProfiles() {
        return hospitalRepository.findAll();
    }

    public HospitalProfile getProfileById(Long id) {
        return hospitalRepository.findById(id).orElse(null);
    }

    public void deleteProfile(Long id) {
    	hospitalRepository.deleteById(id);
    }
}