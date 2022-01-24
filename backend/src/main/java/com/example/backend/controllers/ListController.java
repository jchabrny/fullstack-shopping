package com.example.backend.controllers;

import com.example.backend.models.Item;
import com.example.backend.services.ListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
//RestController is just a combination of @Controller and @ResponseBody, which means that instead of rendering pages, it'll just respond with the data we've given it
//@RequestMapping("/api/list")
public class ListController {

    private final ListService listService;

    public ListController(ListService listService) {
        this.listService = listService;
    }

    @GetMapping
    public String printSomething() {
        return "Hello World!";
    }

    @GetMapping(value = "list/getAll")
    public List<Item> getAll() {
        return listService.getAll();
    }

    @PostMapping(value = "list/addItem")
    public List<Item> addItem(@RequestBody Item itemToAdd) {
        return listService.addItem(itemToAdd);
    }

    /*
    @DeleteMapping(value = "list/removeItem/{id}")
    public List<Item> removeItem(@PathVariable String id) {
        return listService.removeItem(id);
    }
    */
}


//Business Layer: Implementation of actual business logic of processing information