package com.app.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.BloodCampRepository;
import com.app.entity.BloodCamp;

@Service
public class BloodCampService {
    @Autowired
    private BloodCampRepository repository;

    public BloodCamp saveCamp(BloodCamp bloodCamp) {
        return repository.save(bloodCamp);
    }
}
