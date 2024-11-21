package com.app.Repo;


import com.app.entity.NearByBloodCenter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NearByBloodCenterRepository extends JpaRepository<NearByBloodCenter, Long>{

	 List<NearByBloodCenter> findByStateIdAndCityId(Long stateId, Long cityId);
}
