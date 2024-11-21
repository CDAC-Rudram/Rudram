package com.app.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import com.app.Repo.DonorRepository;
import com.app.Repo.DonorUserRepository;
import com.app.entity.Donor;
import com.app.entity.LiveDonor;
import com.app.entity.User;
import com.app.handler.DuplicateUserException;

@Service
public class DonorUserServiceImpl implements DonorUserService {

    @Autowired
    private DonorUserRepository userRepository;

    @Autowired
    private LiveDonorService liveDonorService;
    
    @Autowired
    private DonorRepository donorRepository;

    public boolean saveUser(User user) {
        try {
            if (userRepository.existsByEmail(user.getEmail()) || userRepository.existsByMobileNumber(user.getMobileNumber())) {
                throw new DuplicateUserException("User already registered");
            }

            // Save the user
            userRepository.save(user);

            // If the user is a live donor, save the information in the LiveDonor table
            if (user.isLiveDonor()) {
                LiveDonor liveDonor = new LiveDonor();
                liveDonor.setFullName(user.getFullName());
                liveDonor.setMobileNumber(user.getMobileNumber());
                liveDonor.setState(user.getState());
                liveDonor.setCity(user.getDistrict()); // Assuming district is equivalent to city
                liveDonor.setBloodGroup(user.getBloodGroup());
                liveDonorService.saveLiveDonor(liveDonor);
            }
            
           Donor donor = new Donor(null, null, null, 0, null, null);
            donor.setPhoneNumber(user.getMobileNumber());
            donor.setName(user.getFullName());
            donor.setAge(Integer.parseInt(user.getAge()));
            donor.setBloodType(user.getBloodGroup());
            donor.setDonationDate(user.getLastDonationDate());
            donor.setUser(user);  // Set the User reference
                donorRepository.save(donor);

            return true;
        } catch (DuplicateUserException e) {
            throw e; // Handle it in the controller
        } catch (DataIntegrityViolationException e) {
            // Handle other cases where the constraint fails
            return false;
        }
    }

	@Override
	public User findByMobileNumber(String mobileNumber) {
		return userRepository.findByMobileNumber(mobileNumber);
	}	
}
