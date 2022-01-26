package com.example.backend.services;

import com.example.backend.models.ShoppingList;
import com.example.backend.repositories.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ListService {

    @Autowired
    ListRepository listRepository;

    public java.util.List<ShoppingList> getAll() {
        return listRepository.findAll();
    }

    public void deleteListById(String listId) {
        listRepository.deleteById(listId);
    }

    public Optional<ShoppingList> getListById (String listId) {
        return listRepository.findById(listId);
    }

    public ShoppingList updateList(ShoppingList updatedList) {
        return listRepository.save(updatedList);
    }

    public ShoppingList saveNewList(ShoppingList newList) {
        return listRepository.insert(newList);
    }

    /*
    public List <Item> removeItem(String itemId) {
    itemRepository.deleteById(itemId);
    return getAll();
    }

   public List<Item> addItem(Item itemToAdd) {
        if (itemRepository.findById(itemToAdd.getId()).isPresent()) {
            return getAll();
        }
        itemRepository.save(itemToAdd);
        return getAll();
    }
    */
}

//Using services, we can isolate the request and response handling from the real logic needed to complete tasks; our service needs to talk to a repository to get the list of objects