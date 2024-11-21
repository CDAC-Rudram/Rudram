package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repo.CouponRepository;
import com.app.entity.Coupon;
import com.app.entity.CouponHistory;

@Service
public class CouponService {

    @Autowired
    private CouponRepository couponRepository;

    @Autowired
    private CouponHistoryService couponHistoryService;

    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }

    public Coupon saveCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    public void deleteCoupon(Long id) {
        couponRepository.deleteById(id);
    }

    public Coupon getCouponById(Long id) {
        return couponRepository.findById(id).orElse(null);
    }

    public CouponHistory scratchCoupon(Long couponId) {
        // Find the coupon by id
        Coupon coupon = getCouponById(couponId);
        if (coupon != null) {
            // Create a new CouponHistory object
            CouponHistory couponHistory = new CouponHistory();
            couponHistory.setCouponId(coupon.getId());
            couponHistory.setCompanyName(coupon.getCompanyName());
            couponHistory.setOffer(coupon.getOffer());
            couponHistory.setDescription(coupon.getDescription());
            couponHistory.setValidity(coupon.getValidity());
            couponHistory.setCode(coupon.getCode());
            couponHistory.setScratched(true);

            // Save the coupon history
            couponHistoryService.saveCouponHistory(couponHistory);

            // Delete the coupon from the Coupon table
            deleteCoupon(couponId);

            return couponHistory;
        }
        return null;
    }
}
