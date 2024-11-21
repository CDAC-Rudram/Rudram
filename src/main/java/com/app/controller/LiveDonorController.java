package com.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.entity.LiveDonor;
import com.app.service.LiveDonorService;

@RestController
@RequestMapping("/api/live-donors")
public class LiveDonorController {

    @Autowired
    private LiveDonorService liveDonorService;

    @GetMapping("/search")
    public ResponseEntity<List<LiveDonor>> searchLiveDonors(
        @RequestParam String state,
        @RequestParam String city,
        @RequestParam String bloodGroup) {
        
        List<LiveDonor> donors = liveDonorService.searchLiveDonors(state, city, bloodGroup);
        
        return ResponseEntity.ok(donors);
    }
}
