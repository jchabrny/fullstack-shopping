package com.example.demospringdata;

import com.example.demospringdata.repositories.ItemRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = ItemRepository.class)
public class DemoSpringDataApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoSpringDataApplication.class, args);
    }

    }

