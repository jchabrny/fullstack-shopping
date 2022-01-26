package com.example.backend.controllers;

import com.example.backend.models.ShoppingList;
import com.example.backend.services.ListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/list")
public class ListController {

    private final ListService listService;

    public ListController(ListService listService) {
        this.listService = listService;
    }

    //GET

    @GetMapping
    public String printSomething() {
        return "Hello World!";
    }

    @GetMapping(value = "/getAll")
    public List<ShoppingList> getAll() {
        return listService.getAll();
    }

    @GetMapping(value = "/getById/{listId}")
    public ShoppingList getListById(@PathVariable String listId) {
        return listService.getListById(listId).get();
    }

    //ADD

    @PutMapping (value = "/saveNew")
    public ShoppingList saveNewList(@RequestBody ShoppingList newShoppingList) {
        return listService.saveNewList(newShoppingList);
    }

    @PatchMapping (value = "/update")
    public ShoppingList updateList(@RequestBody ShoppingList updatedList) {
        return listService.updateList(updatedList);
    }

    //REMOVE

    @DeleteMapping(value = "/remove/{listId}")
    public void deleteListById(@PathVariable String listId) {
        listService.deleteListById(listId);
    }

    /* @PostMapping(value = "list/addItem")
    public List<Item> addItem(@RequestBody Item itemToAdd) {
        return listService.addItem(itemToAdd);
    }
    */
}

//Business Layer: Implementation of actual business logic of processing information