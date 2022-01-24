package com.example.backend.services;

import com.example.backend.models.Item;
import com.example.backend.repositories.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListService {

    private final ItemRepository itemRepository;

    public ListService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    public List<Item> addItem(Item itemToAdd) {
        if (itemRepository.findById(itemToAdd.getId()).isPresent()) {
            return getAll();
        }
        itemRepository.save(itemToAdd);
        return getAll();
    }

    /*
    public List <Item> removeItem(String itemId) {
    itemRepository.deleteById(itemId);
    return getAll();
    }
    */
}

//Using services, we can isolate the request and response handling from the real logic needed to complete tasks; our service needs to talk to a repository to get the list of objects