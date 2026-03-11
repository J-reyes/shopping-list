import type { Item } from '../types'

interface ShoppingListItemProps {
    item: Item
    onTogglePurchased: (id: string) => void
    onDeleteItem: (id: string) => void
}

export default function ShoppingListItem({ item, onTogglePurchased, onDeleteItem }: ShoppingListItemProps) {
    return (
        <div> 
            <input type='checkbox' checked={item.purchased} onChange={() => onTogglePurchased(item.id)} />
            <span>{item.name}</span>
            <span>{item.category}</span>
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </div>
    )
}