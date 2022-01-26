package com.example.backend.repositories;

import com.example.backend.models.ShoppingList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ListRepository extends MongoRepository<ShoppingList, String> {

     List<ShoppingList> findAll();

}
