import ShoppingListItem from "./ShoppingListItem";
import type { Item } from "../types";

interface ShoppingListProps {
  items: Item[];
  onTogglePurchased: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export default function ShoppingList({
  items,
  onTogglePurchased,
  onDeleteItem,
}: ShoppingListProps) {
  return (
    <div>
      <h1>Shopping List</h1>
      {items.map((item) => (
        <ShoppingListItem key={item.id} item={item} onTogglePurchased={onTogglePurchased} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}
