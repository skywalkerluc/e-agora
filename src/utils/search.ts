import { Category, Situation } from '../types';

export function filterSituationsBySearch(
  categories: Category[],
  searchQuery: string
): Category[] {
  const trimmedQuery = searchQuery.trim();

  if (!trimmedQuery || trimmedQuery.length < 3) {
    return categories;
  }

  const query = trimmedQuery.toLowerCase();

  return categories
    .map((category) => ({
      ...category,
      situations: category.situations.filter((situation) => {
        // Busca no título
        if (situation.title.toLowerCase().includes(query)) {
          return true;
        }

        // Busca nas keywords
        if (situation.keywords) {
          return situation.keywords.some((keyword) =>
            keyword.toLowerCase().includes(query)
          );
        }

        return false;
      }),
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
