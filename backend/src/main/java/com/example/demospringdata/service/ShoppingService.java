package com.example.demospringdata.service;

import com.example.demospringdata.models.Item;
import com.example.demospringdata.repositories.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ShoppingService {

    private  final ItemRepository itemRepository;
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
}
