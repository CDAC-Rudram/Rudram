package com.app.service;

import com.app.entity.User;

public interface DonorUserService {

	boolean saveUser(User user);

	User findByMobileNumber(String mobileNumber);

}
