package com.app.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.CouponHistory;

@Repository
public interface CouponHistoryRepository extends JpaRepository<CouponHistory, Long> {
	
	List<CouponHistory> findByPhoneNumber(String phoneNumber);
}

