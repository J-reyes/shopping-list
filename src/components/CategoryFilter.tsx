import { CATEGORIES, type FilterCategory } from '../types'

interface CategoryFilterProps {
    filterCategory: FilterCategory
    onChangeFilter: (category: FilterCategory) => void
}

export default function CategoryFilter({ filterCategory, onChangeFilter }: CategoryFilterProps) {
    return (
        <div className="card">
            <div className="filter-row">
                <span className="filter-label">Filter by category:</span>
                <select name='category' value={filterCategory} onChange={(e) => onChangeFilter(e.target.value as FilterCategory)}>
                    <option value="All">All</option>
                    {CATEGORIES.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}