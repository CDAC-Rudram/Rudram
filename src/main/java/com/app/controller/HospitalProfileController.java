package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.HospitalProfile;
import com.app.service.HospitalProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/profiles")
@CrossOrigin(origins = "http://localhost:3000")
public class HospitalProfileController {
	private static final Logger logger = LoggerFactory.getLogger(HospitalProfileController.class);

    @Autowired
    private  HospitalProfileService hospitalProfileService;

    @PostMapping
    public ResponseEntity<HospitalProfile> createProfile(@RequestBody HospitalProfile profile) {
        logger.info("Received profile data: {}", profile);
        HospitalProfile savedProfile = hospitalProfileService.saveProfile(profile);
        logger.info("Saved profile: {}", savedProfile);
        return ResponseEntity.ok(savedProfile);
    }

    @GetMapping
    public ResponseEntity<List<HospitalProfile>> getAllProfiles() {
        List<HospitalProfile> profiles = hospitalProfileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HospitalProfile> getProfileById(@PathVariable Long id) {
        HospitalProfile profile = hospitalProfileService.getProfileById(id);
        return ResponseEntity.ok(profile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        hospitalProfileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}

