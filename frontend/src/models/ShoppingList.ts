import {GroceryItem} from "./GroceryItem";

export interface ShoppingList {
    listName: string
    listId: string
    listItems: GroceryItem[]
}
