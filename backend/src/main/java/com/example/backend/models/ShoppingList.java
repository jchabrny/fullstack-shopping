package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Builder
@Document(collection = "shoppingLists")
public class ShoppingList {

    @Id
    private String listId;
    private String listName;
}
