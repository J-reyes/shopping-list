import { useState } from 'react'
import type { Item } from '../types'

interface ShoppingListItemProps {
    item: Item
    onTogglePurchased: (id: string) => void
    onDeleteItem: (id: string) => void
}

export default function ShoppingListItem({ item, onTogglePurchased, onDeleteItem }: ShoppingListItemProps) {
    const [isLeaving, setIsLeaving] = useState(false)

    function handleDelete() {
        setIsLeaving(true)
        setTimeout(() => onDeleteItem(item.id), 300)
    }

    return (
        <li className={`item-card ${item.purchased ? "purchased" : ""} ${isLeaving ? "leaving" : ""}`}>
            <input type='checkbox' checked={item.purchased} onChange={() => onTogglePurchased(item.id)} />
            <span className={`item-name ${item.purchased ? "purchased" : ""}`}>{item.name}</span>
            <span className="item-category">{item.category}</span>
            <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </li>
    )
}