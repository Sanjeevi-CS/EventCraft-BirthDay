package com.example.sanjeevi.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sanjeevi.model.EventModel;

import com.example.sanjeevi.service.impl.EventServices;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin("*")
// @RequestMapping("/api/v1/auth")
public class EventController {

    @Autowired
    private EventServices eventServices;

    @PostMapping("/user/add/event/{userid}/{themeid}")
   
    public ResponseEntity<EventModel> addEvent(@RequestBody EventModel event, @PathVariable Integer userid,
            @PathVariable Integer themeid) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("User Authorities: " + authentication.getAuthorities());
        EventModel savedEvent = eventServices.addEvent(event, userid, themeid);
        return ResponseEntity.ok(savedEvent);
    }

    @GetMapping("/user/get/events")
    public ResponseEntity<List<EventModel>> getAllEvents() {
        List<EventModel> events = eventServices.getDetails();
        return ResponseEntity.ok(events);
    }

    @PutMapping("/user/update/events/{id}")
    public ResponseEntity<EventModel> updateEvent(@RequestBody EventModel event, @PathVariable Integer id){
        EventModel events=eventServices.updateEvent(id, event);
        return ResponseEntity.ok(events);
    }

}
