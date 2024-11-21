package com.app.Repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.BloodCenter;

@Repository
public interface BloodCenterRepository extends JpaRepository<BloodCenter, Long> {
    // Additional query methods (if needed)
}

