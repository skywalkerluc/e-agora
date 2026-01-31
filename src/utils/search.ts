import { Category, Situation } from '../types';

export function filterSituationsBySearch(
  categories: Category[],
  searchQuery: string
): Category[] {
  if (!searchQuery.trim()) {
    return categories;
  }

  const query = searchQuery.toLowerCase();

  return categories
    .map((category) => ({
      ...category,
      situations: category.situations.filter((situation) =>
        situation.title.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.situations.length > 0);
}

export function getAllSituationsFlat(categories: Category[]): Array<Situation & { categoryId: string; categoryName: string }> {
  return categories.flatMap((category) =>
    category.situations.map((situation) => ({
      ...situation,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );
}
