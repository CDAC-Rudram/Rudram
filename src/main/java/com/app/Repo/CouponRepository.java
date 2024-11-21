package com.app.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Long> {
}

