package com.app.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.BloodCenterRepository;
import com.app.entity.BloodCenter;

@Service
public class BloodCenterService {

    @Autowired
    private BloodCenterRepository bloodCenterRepository;

    public BloodCenter saveBloodCenter(BloodCenter bloodCenter) {
        return bloodCenterRepository.save(bloodCenter);
    }
}
