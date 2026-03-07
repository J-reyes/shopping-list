import ShoppingListItem from './ShoppingListItem'
import type { Item } from '../types'



export default function ShoppingList({ items }: { items: Item[] }) {
    return (
        <div>
            <h1>Shopping List</h1>
            {items.map(item => (
                <ShoppingListItem key={item.id} item={item}/>
            ))}
        </div>
    )
}