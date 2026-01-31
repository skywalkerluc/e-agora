import { useMemo } from 'react';
import situationsData from '../assets/data/situations.json';
import { SituationsData } from '../types';
import { filterSituationsBySearch } from '../utils/search';

const data = situationsData as SituationsData;

export function useSituations(searchQuery: string = '') {
  const filteredCategories = useMemo(() => {
    return filterSituationsBySearch(data.categories, searchQuery);
  }, [searchQuery]);

  return {
    categories: filteredCategories,
    allCategories: data.categories,
    meta: data.meta,
  };
}

export function useSituation(categoryId: string, situationId: string) {
  const category = data.categories.find((cat) => cat.id === categoryId);
  const situation = category?.situations.find((sit) => sit.id === situationId);

  return {
    category,
    situation,
  };
}
