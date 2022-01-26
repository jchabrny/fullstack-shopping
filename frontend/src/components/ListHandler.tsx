import React, {FormEvent, useContext, useState} from "react";
import {GroceryItem} from "../models/GroceryItem";
import "./ListHandler.scss";
import {ShoppingList} from "../models/ShoppingList";
import {updateList} from "../services/BackendService";
import {AuthContext} from "../context/AuthProvider";

export default function ListHandler(){
    const [newItemName, setNewItemName] = useState("");
    const [list, setList] = useState<ShoppingList>({listName: "", listId: "", listItems: []});
    const {token, jwtDecoded} = useContext(AuthContext);

   /* const STORAGE_KEY = "myValueKey";
    const storageItem = localStorage.getItem(STORAGE_KEY) || "";
    const items: Items = JSON.parse(storageItem);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }, [list]);*/

    function handleChange(event: FormEvent<HTMLInputElement>) {
        setNewItemName(event.currentTarget.value);
    }

    function handleAdd() {

        setList({...list, listItems: [...list.listItems, {name: newItemName}]});
        updateList({...list, listItems: [...list.listItems, {name: newItemName}]}, token);
    }

    //splice, filter
   function handleRemove(item: GroceryItem) {
   /*     const newList = [...list];
        newList.splice(list.indexOf(item), 1);
        setList(newList);*/
    }

    /*
    const remove = (index) => {setItems((items) => items.filter((_, i) => i !== index));};
     */

    return (
        <div>

            <div className="addItem">
                <input
                    value={newItemName}
                    placeholder="Enter item"
                    type="text"
                    onChange={handleChange}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="btn btn-dark btn-sm"
                >
                    Add item
                </button>
            </div>
            <br/>
            <ol>
                {list.listItems.map((item, index) => (
                    <li key={index}>
                        {item.name} <input type="checkbox" defaultChecked={false}/>
                        <button
                            type="button"
                            className="btn btn-dark btn-sm"
                            onClick={() => handleRemove(item)}
                        >
                            Remove item
                        </button>
                    </li>
                ))}
            </ol>
        </div>);
}