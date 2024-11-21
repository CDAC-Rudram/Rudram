package com.app.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.app.entity.NearByBloodHospitals;

@Repository
public interface NearByHospitalRepository extends JpaRepository<NearByBloodHospitals, Long>{

	List<NearByBloodHospitals> findByStateIdAndCityId(Long stateId, Long cityId);
}
