# Shopping List — Wireframe

## Layout

```
┌─────────────────────────────────────────────────────────┐
│                    Shopping List                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ AddItemForm                                     │   │
│  │                                                 │   │
│  │  Item name          Category      [  Add  ]     │   │
│  │  ┌───────────────┐  ┌──────────┐               │   │
│  │  │               │  │ Produce ▼│               │   │
│  │  └───────────────┘  └──────────┘               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ CategoryFilter                                  │   │
│  │                                                 │   │
│  │  Filter by category                             │   │
│  │  ┌──────────┐                                   │   │
│  │  │   All   ▼│                                   │   │
│  │  └──────────┘                                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ShoppingList                                    │   │
│  │                                                 │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │ ShoppingListItem                        │   │   │
│  │  │  ☐  Apples          [Produce]  [Delete] │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │ ShoppingListItem (purchased)            │   │   │
│  │  │  ☑  Milk            [Dairy]   [Delete]  │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │ ShoppingListItem                        │   │   │
│  │  │  ☐  Sourdough       [Bakery]  [Delete]  │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │                                                 │   │
│  │  — empty state —                               │   │
│  │  "No items yet"                                │   │
│  │  "No items in this category"                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ActionsBar                                      │   │
│  │                                                 │   │
│  │                    [ Clear Purchased ]          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Component Tree

```
App
├── AddItemForm
│     local state: { name: string, category: Category }
│     props out:   onAddItem(item: Item) → void
│
├── CategoryFilter
│     props in:    filterCategory: FilterCategory
│     props out:   onChangeFilter(category: FilterCategory) → void
│
├── ShoppingList
│     props in:    items: Item[]   ← visibleItems (derived in App)
│     │
│     └── ShoppingListItem (one per item)
│           props in:  item: Item
│           props out: onTogglePurchased(id: string) → void
│                      onDeleteItem(id: string) → void
│
└── ActionsBar
      props out: onClearPurchased() → void
```

---

## State Map (lives in App)

```
App state
├── items: Item[]           → passed as visibleItems (filtered) to ShoppingList
└── filterCategory: FilterCategory  → passed to CategoryFilter

Derived in App (not stored)
└── visibleItems = filterCategory === "All"
                  ? items
                  : items.filter(i => i.category === filterCategory)
```

---

## Item States (ShoppingListItem)

```
Not purchased:
  ☐  Apples          [Produce]   [Delete]

Purchased (strike-through or dimmed):
  ☑  ~~Milk~~        [Dairy]     [Delete]
```

---

## Empty States (ShoppingList)

```
No items at all:
┌──────────────────────────────┐
│  No items yet. Add one above │
└──────────────────────────────┘

Filter active but no matches:
┌────────────────────────────────────┐
│  No items in this category         │
└────────────────────────────────────┘
```
