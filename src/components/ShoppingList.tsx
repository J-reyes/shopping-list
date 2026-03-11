import ShoppingListItem from "./ShoppingListItem";
import type { Item } from "../types";

interface ShoppingListProps {
  items: Item[];
  allItems: Item[];
  onTogglePurchased: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export default function ShoppingList({
  items,
  allItems,
  onTogglePurchased,
  onDeleteItem,
}: ShoppingListProps) {
  return (
    <div>
      <h1>Shopping List</h1>
      {allItems.length === 0 ? (
        <p>No items yet</p>
      ) : items.length === 0 ? (
        <p>No items in this category</p>
      ) : (
        <ul>
          {items.map((item) => (
            <ShoppingListItem
              key={item.id}
              item={item}
              onTogglePurchased={onTogglePurchased}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
