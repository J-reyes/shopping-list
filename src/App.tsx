import { useState } from 'react'
import type { Item, FilterCategory } from './types'
import AddItemForm from './components/AddItemForm'
import CategoryFilter from './components/CategoryFilter'
import ShoppingList from './components/ShoppingList'
import ActionsBar from './components/ActionsBar'


function App() {
  const [items, setItems] = useState<Item[]>([])
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("All")

  const visibleItems = filterCategory === "All" ? items : items.filter(item => item.category === filterCategory)

  function handleAddItem(item: Item) {
    setItems(prev => [item, ...prev])
  }


  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shopping App</h1>
      <AddItemForm onAddItem={handleAddItem}/>
      <CategoryFilter />
      <ShoppingList items={visibleItems} />
      <ActionsBar />
    </div>
  );
}

export default App;
