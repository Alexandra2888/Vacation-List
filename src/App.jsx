
import Logo from "./logo/Logo";
import Form from "./form/Form";
import PackingList from "./packing-list/PackingList";
import Stats from "./stats/Stats";
import { useState } from "react";
import './App.css';

import {initialItems} from "./data";

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  }

  const handleDeleteItem = (id) => {
    setItems(items => items.filter(item=> item.id !== id ))
  }


  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    setItems([]);
}

  return (
    <main className="app">
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items}/>
    </main>
  )
}

export default App;
