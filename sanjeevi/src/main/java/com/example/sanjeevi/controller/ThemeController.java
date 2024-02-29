package com.example.sanjeevi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.sanjeevi.model.EventModel;
import com.example.sanjeevi.model.ThemeModal;
import com.example.sanjeevi.model.ThemeSample;
import com.example.sanjeevi.service.impl.EventServices;
import com.example.sanjeevi.service.impl.ThemesServices;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class ThemeController {
    @Autowired
    private final ThemesServices themeService;

    @Autowired
    private final EventServices eventServices;

    public ThemeController(ThemesServices themeService, EventServices eventServices) {
        this.themeService = themeService;
        this.eventServices = eventServices;
        // this.themeSampleService = themesample;
    }

    @GetMapping("/get/themes")
    public ResponseEntity<List<ThemeModal>> getAllProducts() {
        List<ThemeModal> themes = themeService.getDetails();
        return ResponseEntity.ok(themes);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/add/theme/{id}")
    public ResponseEntity<ThemeModal> addProduct(@RequestBody ThemeModal theme, @PathVariable Integer id) {
        // System.out.println(theme.getThemeName());
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("User Authorities: " + authentication.getAuthorities());
        ThemeModal savedTheme = themeService.addTheme(theme, id);
        return ResponseEntity.ok(savedTheme);
    }

    @PostMapping("/add/event/{userid}/{themeid}")
    public ResponseEntity<EventModel> addEvent(@RequestBody EventModel event, @PathVariable Integer userid,
            @PathVariable Integer themeid) {
        EventModel savedEvent = eventServices.addEvent(event, userid, themeid);
        return ResponseEntity.ok(savedEvent);
    }

}
