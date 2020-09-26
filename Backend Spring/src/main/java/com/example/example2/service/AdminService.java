package com.example.example2.service;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/admin")
class AdminService {


    @GetMapping(value="/test", produces = MediaType.APPLICATION_JSON_VALUE)
    public String test() {
        return "{\"message\": \"admin OK\"}";
    }

}