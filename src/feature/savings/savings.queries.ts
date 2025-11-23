import { queryOptions } from '@tanstack/react-query';
import { getSavingsProducts } from './apis/getSavingsProducts';
import type { SavingsProductFilterOption } from './savings.type';
import { getFilteredSavingsProducts } from './utils/getFilteredSavingsProducts';

export const savingsQueries = {
  all: () => ['savings'],
  products: () => [...savingsQueries.all(), 'products'],
  filteredProducts: (filterOption: SavingsProductFilterOption) => [...savingsQueries.products(), filterOption],

  getFilteredProducts: (filterOption: SavingsProductFilterOption) =>
    queryOptions({
      queryKey: savingsQueries.filteredProducts(filterOption),
      queryFn: getSavingsProducts,
      select: savingsProducts => getFilteredSavingsProducts({ savingsProducts, filterOption }),
    }),
};
