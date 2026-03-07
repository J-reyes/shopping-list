import type { Item } from '../types'

interface ShoppingListItemProps {
    item: Item
}

export default function ShoppingListItem({ item }: ShoppingListItemProps) {
    return (
        <div> 
            <input type='checkbox' checked={item.purchased} onChange={() => {}} />
            <span>{item.name}</span>
            <span>{item.category}</span>
            <button>Delete</button>
        </div>
    )
}