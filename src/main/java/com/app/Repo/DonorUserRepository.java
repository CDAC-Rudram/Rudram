package com.app.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.User;

@Repository
public interface DonorUserRepository extends JpaRepository<User , Long>{

	 boolean existsByEmail(String email);
	    boolean existsByMobileNumber(String mobileNumber);
	    
	    User findByMobileNumber(String mobileNumber);
}
