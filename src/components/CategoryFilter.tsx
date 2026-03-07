import { CATEGORIES } from '../types'

export default function CategoryFilter() {
    return (
        <div> 
            Filter by category:
            <select name='category'>
                <option value="All">All</option>
                {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}