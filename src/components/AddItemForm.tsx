import { useState } from 'react'
import { CATEGORIES } from '../types'
import type { Item } from '../types'

interface AddItemFormProps {
    onAddItem: (item: Item) => void
}


export default function AddItemForm({ onAddItem }: AddItemFormProps) {
    const [form, setForm] = useState({ name: "", category: CATEGORIES[0] })

    function handleAddItemChange(inputName: string, newValue: string) {
        setForm(prev => ({ ...prev, [inputName]: newValue }))
    }

    function handleAddItem(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if (form.name.trim() === "") return
        const newItem: Item = { id: crypto.randomUUID(), name: form.name, category: form.category, purchased: false }
        onAddItem(newItem)
        setForm({ name: "", category: CATEGORIES[0] })

    }

    return (
        <div className="card">
            <form className="add-form" onSubmit={handleAddItem}>
                <input type='text' name='name' placeholder='Item name' value={form.name} onChange={(e) => handleAddItemChange("name", e.target.value)} />
                <select name='category' value={form.category} onChange={(e) => handleAddItemChange("category", e.target.value)}>
                    {CATEGORIES.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <button type='submit' className="btn-primary" disabled={form.name.trim() === ""}>Add</button>
            </form>
        </div>
    );
}