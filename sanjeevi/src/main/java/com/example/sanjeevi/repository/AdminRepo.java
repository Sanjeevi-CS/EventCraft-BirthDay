package com.example.sanjeevi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.AdminModel;
import com.example.sanjeevi.model.User;

public interface AdminRepo extends JpaRepository<AdminModel,Integer> {
   Optional <AdminModel>  findByUser(User user);
   Optional <AdminModel> findByUserEmail(String email);
}
