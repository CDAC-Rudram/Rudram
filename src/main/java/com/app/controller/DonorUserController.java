package com.app.controller;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.handler.DuplicateUserException;
import com.app.service.DonorUserService;

@RestController
@RequestMapping("/api")
public class DonorUserController {

    @Autowired
    private DonorUserService userService;

    @PostMapping("/form")
    public ResponseEntity<Map<String, String>> submitForm(@Valid @RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        try {
            boolean isSaved = userService.saveUser(user);
            response.put("message", "User data saved successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (DuplicateUserException e) {
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        } catch (Exception e) {
            response.put("message", "Failed to save user data");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ExceptionHandler(DuplicateUserException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<Map<String, String>> handleDuplicateUserException(DuplicateUserException e) {
        Map<String, String> response = new HashMap<>();
        response.put("message", e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Map<String, String>> handleGenericException(Exception e) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "An unexpected error occurred.");
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @GetMapping("/check-mobile/{mobileNumber}")
    public ResponseEntity<?> checkMobileNumber(@PathVariable String mobileNumber,  HttpSession session) {
        User user = userService.findByMobileNumber(mobileNumber);
        Map<String, Object> response = new HashMap<>();
        
        if (user != null && LocalDate.now().equals(user.getLastDonationDate())) {
            session.setAttribute("mobileNumber", mobileNumber); // Store mobile number in session
            response.put("canViewCoupons", true);
        } else {
            response.put("canViewCoupons", false);
        }
        
        return ResponseEntity.ok(response);
    }
}
