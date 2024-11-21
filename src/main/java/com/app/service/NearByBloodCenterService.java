package com.app.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.NearByBloodCenterRepository;
import com.app.entity.NearByBloodCenter;

@Service
public class NearByBloodCenterService {

	 @Autowired
	    private NearByBloodCenterRepository bloodCenterRepository;

	    public List<NearByBloodCenter> getBloodCentersByStateAndCity(Long stateId, Long cityId) {
	        return bloodCenterRepository.findByStateIdAndCityId(stateId, cityId);
	    }
	
}
