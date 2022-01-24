package com.example.backend.repositories;

import com.example.backend.models.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ItemRepository extends MongoRepository<Item, String> {

     @Override
     List<Item> findAll();
}
