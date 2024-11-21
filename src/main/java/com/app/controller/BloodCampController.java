package com.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.BloodCamp;
import com.app.service.BloodCampService;

@RestController
@RequestMapping("/api/camps")
@CrossOrigin(origins = "http://localhost:3000")
public class BloodCampController {
    @Autowired
    private BloodCampService service;

    @PostMapping
    public ResponseEntity<BloodCamp> createCamp(@RequestBody BloodCamp bloodCamp) {
        BloodCamp savedCamp = service.saveCamp(bloodCamp);
        return new ResponseEntity<>(savedCamp, HttpStatus.CREATED);
    }
}
