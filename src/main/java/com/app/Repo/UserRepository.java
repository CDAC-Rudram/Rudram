package com.app.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.UserInfo;

/**
 * Repository interface for performing CRUD operations on the UserInfo entity.
 * 
 * Extends JpaRepository to provide basic CRUD and JPA-related operations.
 */
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Integer> {

    /**
     * Custom query method to find a user by their phone number.
     * 
     * @param phoneNumber The phone number of the user to find.
     * @return An Optional containing the UserInfo if found, or an empty Optional if not found.
     */
    Optional<UserInfo> findByPhoneNumber(String phoneNumber);

}
