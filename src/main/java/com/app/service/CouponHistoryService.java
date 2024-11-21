package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.CouponHistoryRepository;
import com.app.entity.CouponHistory;

@Service
public class CouponHistoryService {

    @Autowired
    private CouponHistoryRepository couponHistoryRepository;

    public List<CouponHistory> getAllCouponHistories() {
        return couponHistoryRepository.findAll();
    }

    public CouponHistory saveCouponHistory(CouponHistory couponHistory) {
        return couponHistoryRepository.save(couponHistory);
    }
    
    public List<CouponHistory> getCouponHistoriesByPhoneNumber(String phoneNumber) {
        return couponHistoryRepository.findByPhoneNumber(phoneNumber);
    }
}
