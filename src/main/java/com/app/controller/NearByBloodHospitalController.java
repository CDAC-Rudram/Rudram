package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.NearByBloodHospitals;
import com.app.service.NearByHospitalService;




@RestController
public class NearByBloodHospitalController {

	 @Autowired
	    private NearByHospitalService hospitalService;

	    @GetMapping("/api/nearby-hospitals")
	    public List<NearByBloodHospitals> getHospitals(@RequestParam Long stateId, @RequestParam Long cityId) {
	        return hospitalService.getHospitalByStateAndCity(stateId, cityId);
	    }
}
