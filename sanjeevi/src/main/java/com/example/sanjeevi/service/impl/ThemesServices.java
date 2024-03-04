package com.example.sanjeevi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sanjeevi.model.AdminModel;
import com.example.sanjeevi.model.ThemeModal;
import com.example.sanjeevi.model.ThemeSample;
import com.example.sanjeevi.model.UserModel;
import com.example.sanjeevi.repository.AdminRepo;
import com.example.sanjeevi.repository.ThemeRepo;
import com.example.sanjeevi.repository.ThemeSampleRepo;
import com.example.sanjeevi.repository.UserModelRepo;

@Service
public class ThemesServices {
    @Autowired
    private ThemeRepo themeRepo;

   

    @Autowired
    private AdminRepo adminRepo;

    public ThemeModal addTheme(ThemeModal theme,Integer adminId) {
        Optional <AdminModel> admin=adminRepo.findById(adminId);
        theme.setAdmin(admin.get());
       
        return themeRepo.save(theme);
        
    }

    

    public String deleteTheme(int themeId) {
        themeRepo.deleteById(themeId);
        return "Successfully deleted";
    }

  

    public List<ThemeModal> getDetails() {
        List<ThemeModal> arr = new ArrayList<>();
        arr = (List<ThemeModal>) themeRepo.findAll();
        return arr;
    }

    // public ThemeSample update(int themeId, ThemeSample theme) {
    //     ThemeSample themesample = themeSample.findById(themeId).get();

    //     if (Objects.nonNull(themesample) && (!Objects.isNull(themesample.getThemeName()))) {
    //         themesample.setThemeName(themesample.getThemeName());
    //     }

    //     return themeSample.saveAndFlush(themesample);

    // }

    public ThemeModal update(int themeId , ThemeModal theme){
        ThemeModal themeModal = themeRepo.findById(themeId).get();
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeName()))){
            themeModal.setThemeName(theme.getThemeName());
        }
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeDescription()))){
            themeModal.setThemeDescription(theme.getThemeDescription());
        }
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getAddons()))){
            themeModal.setAddons(theme.getAddons());
        }
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeImageURL()))){
            themeModal.setThemeImageURL(theme.getThemeImageURL());
        }
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeCost()))){
            themeModal.setThemeCost(theme.getThemeCost());
        }
        if(Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getFoodItems()))){
            themeModal.setFoodItems(theme.getFoodItems());
        }
        return themeRepo.save(themeModal);
    }

}
