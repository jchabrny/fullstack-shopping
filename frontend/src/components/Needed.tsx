import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Needed.scss";
import { IItem, Items } from "../models/GroceryItem";

export default function Needed() {
  const [name, setName] = useState("");
  const STORAGE_KEY = "myValueKey";
  const storageItem = localStorage.getItem(STORAGE_KEY) || "";
  const items: Items = JSON.parse(storageItem);
  const [list, setList] = useState<Items>(items);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
  }

  function handleRemove(item: IItem) {
    const newList = [...list];
    newList.splice(list.indexOf(item), 1);
    setList(newList);
  }

  return (
    <div>
      <div className="addItem">
        <input
          value={name}
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
      <br />
      <ol>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} <input type="checkbox" defaultChecked={false} />
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
    </div>
  );
}
