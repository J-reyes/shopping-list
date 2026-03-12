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
    <div className="card">
      <h2 className="list-title">Items</h2>
      {allItems.length === 0 ? (
        <p className="list-empty">No items yet — add something above.</p>
      ) : items.length === 0 ? (
        <p className="list-empty">No items in this category.</p>
      ) : (
        <ul className="item-list">
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
