package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.Repo.LiveDonorRepository;
import com.app.entity.LiveDonor;

@Service
public class LiveDonorService {

    @Autowired
    private LiveDonorRepository liveDonorRepository;

    public LiveDonor saveLiveDonor(LiveDonor liveDonor) {
        return liveDonorRepository.save(liveDonor);
    }

    public List<LiveDonor> searchLiveDonors(String state, String city, String bloodGroup) {
        return liveDonorRepository.findByStateAndCityAndBloodGroup(state, city, bloodGroup);
    }
}
