package com.example.demospringdata.controller;

import com.example.demospringdata.models.Item;
import com.example.demospringdata.service.ShoppingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
public class ShoppingController {

    private final ShoppingService shoppingService;

    @GetMapping
    public String printSomething() {
        return "Hello World!";
    }

    //@GetMapping
    public List<Item> fetchAllItems() {
        return shoppingService.getAllItems();
    }
}
