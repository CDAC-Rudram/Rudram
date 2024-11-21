package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.CouponHistory;
import com.app.service.CouponHistoryService;

@RestController
@RequestMapping("/api/couponHistory")
@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin according to your frontend server
public class CouponHistoryController {

    @Autowired
    private CouponHistoryService couponHistoryService;

    @GetMapping
    public List<CouponHistory> getAllCouponHistories() {
        return couponHistoryService.getAllCouponHistories();
    }

    @PostMapping
    public CouponHistory addCouponToHistory(@RequestBody CouponHistory couponHistory) {
        return couponHistoryService.saveCouponHistory(couponHistory);
    }
    
    @GetMapping("/byPhoneNumber")
    public List<CouponHistory> getCouponHistoriesByPhoneNumber(HttpSession session) {
        String phoneNumber = (String) session.getAttribute("mobileNumber"); // Retrieve from session
        if (phoneNumber != null) {
            return couponHistoryService.getCouponHistoriesByPhoneNumber(phoneNumber);
        } else {
            // Handle the case where the phone number is not in the session
            return List.of(); // Return an empty list or appropriate response
        }
    }
}
