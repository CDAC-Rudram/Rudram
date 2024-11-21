package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.NearByBloodCenter;
import com.app.service.NearByBloodCenterService;




@RestController
public class NearByBloodCenterController {
	
	 @Autowired
	    private NearByBloodCenterService bloodCenterService;

	    @GetMapping("/api/blood-centers")
	    public List<NearByBloodCenter> getBloodCenters(@RequestParam Long stateId, @RequestParam Long cityId) {
	        return bloodCenterService.getBloodCentersByStateAndCity(stateId, cityId);
	    }

}
