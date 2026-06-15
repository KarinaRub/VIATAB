package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class StoryController {

    @GetMapping("/api/stories")
    public String getStories() {
        return "VIATAB backend is running";
    }
}