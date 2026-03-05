export const CATEGORIES = ["Produce", "Dairy", "Bakery", "Meat", "Snacks", "Household"] as const;

export type Category = typeof CATEGORIES[number];

export type Item = {
  id: string;
  name: string;
  category: Category;
  purchased: boolean;
}

export type FilterCategory = "All" | Category;