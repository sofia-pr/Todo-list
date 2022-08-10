import React, { useState } from "react";
import classes from "./InputAndList.module.css";

const InputAndList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Please, enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  };



  const deleteItem = (id) => {
   const newArray = items.filter(item => item.id !== id);
   setItems(newArray);
  };

  return (
    <div>
      <input
        type="text"
        className={classes.input}
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>❌</button></li>;
        })}
      </ul>
    </div>
  );
};

export default InputAndList;
