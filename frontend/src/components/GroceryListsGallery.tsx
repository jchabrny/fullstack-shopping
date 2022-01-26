import {useContext, useState} from "react";
import ListHandler from "./ListHandler";
import {AuthContext} from "../context/AuthProvider";
import {ShoppingList} from "../models/ShoppingList";

interface ListGalleryProps {
    lists: ShoppingList[]
}

//map-Funktion für dynamische Anzeige von mehreren Listen

export default function GroceryListsGallery({lists}: ListGalleryProps) {


    //const getAll = () => getAllLists(token).then(setLists)

    return (
        <div>
                <ListHandler />

        </div>
    );
}
