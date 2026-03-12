import { useState, useEffect } from "react";
import type { Item, FilterCategory } from "./types";
import AddItemForm from "./components/AddItemForm";
import CategoryFilter from "./components/CategoryFilter";
import ShoppingList from "./components/ShoppingList";
import ActionsBar from "./components/ActionsBar";

function App() {
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("All");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const visibleItems =
    filterCategory === "All"
      ? items
      : items.filter((item) => item.category === filterCategory);

  function handleAddItem(item: Item) {
    setItems((prev) => [item, ...prev]);
  }

  function handleTogglePurchased(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item,
      ),
    );
  }

  function handleDeleteItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleClearPurchased() {
    setItems((prev) => prev.filter((item) => !item.purchased));
  }

  function handleChangeFilter(category: FilterCategory) {
    setFilterCategory(category);
  }

  return (
    <div className="app">
      <h1 className="app-title">Shopping List</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <CategoryFilter
        filterCategory={filterCategory}
        onChangeFilter={handleChangeFilter}
      />
      <ShoppingList
        allItems={items}
        items={visibleItems}
        onTogglePurchased={handleTogglePurchased}
        onDeleteItem={handleDeleteItem}
      />
      <ActionsBar onClearPurchased={handleClearPurchased} />
    </div>
  );
}

export default App;
