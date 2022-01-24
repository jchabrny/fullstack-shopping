package com.example.backend.repositories;

import com.example.backend.models.UserMongo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepository extends MongoRepository<UserMongo, String> {

    Optional<UserMongo> findByUsername (String username);
}

//Persistence Layer: in order to perform CRUD operations on `models - User`; declares methods like findAll(), findOne() and save() to manipulate collections; encapsulate all logic to handle data access