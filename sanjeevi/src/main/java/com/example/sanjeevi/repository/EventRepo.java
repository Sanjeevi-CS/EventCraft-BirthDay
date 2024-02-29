package com.example.sanjeevi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.EventModel;

public interface EventRepo extends JpaRepository<EventModel,Integer> {
    
}
