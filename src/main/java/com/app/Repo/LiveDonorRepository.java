package com.app.Repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entity.LiveDonor;

public interface LiveDonorRepository extends JpaRepository<LiveDonor, Long> {
    List<LiveDonor> findByStateAndCityAndBloodGroup(String state, String city, String bloodGroup);
}
