package com.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.BloodCenter;
import com.app.service.BloodCenterService;

@RestController
@RequestMapping("/api/blood-centers")
public class BloodCenterController {

    @Autowired
    private BloodCenterService bloodCenterService;

    @PostMapping
    public ResponseEntity<BloodCenter> registerBloodCenter(@RequestBody BloodCenter bloodCenter) {
        BloodCenter savedBloodCenter = bloodCenterService.saveBloodCenter(bloodCenter);
        return new ResponseEntity<>(savedBloodCenter, HttpStatus.CREATED);
    }
}

