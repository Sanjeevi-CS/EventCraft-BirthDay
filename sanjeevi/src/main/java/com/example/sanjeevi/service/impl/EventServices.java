package com.example.sanjeevi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sanjeevi.model.EventModel;
import com.example.sanjeevi.model.ThemeModal;
import com.example.sanjeevi.model.UserModel;
import com.example.sanjeevi.repository.EventRepo;
import com.example.sanjeevi.repository.ThemeRepo;
import com.example.sanjeevi.repository.UserModelRepo;
import com.example.sanjeevi.repository.UserRepo;
@Service
public class EventServices {
    @Autowired
    private EventRepo eventRepo;

 

    @Autowired
    private UserModelRepo userRepo;

    @Autowired
    private ThemeRepo themeRepo;

    public String deleteEvent(int eventId) {
        eventRepo.deleteById(eventId);
        return "Successfully deleted";
    }

    public EventModel updateEvent(int eventId, EventModel event) {
        EventModel eventModal = eventRepo.findById(eventId).get();
        return eventRepo.save(eventModal);
    }

    public List<EventModel> getDetails() {
        List<EventModel> arr = new ArrayList<>();
        arr = (List<EventModel>) eventRepo.findAll();
        return arr;
    }

    public EventModel addEvent(EventModel event, Integer userId,Integer themeId) {
        Optional<UserModel> user = userRepo.findById(userId);
        Optional<ThemeModal> theme=themeRepo.findById(themeId);
        event.setUserModel(user.get());
        event.setEventTheme(theme.get());
        // event.setEventTheme();
        return eventRepo.save(event);
    }
}
