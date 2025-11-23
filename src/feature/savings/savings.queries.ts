import { queryOptions } from '@tanstack/react-query';
import { getSavingsProducts } from './apis/getSavingsProducts';
import type { SavingsProductFilterOption } from './savings.type';
import { getFilteredSavingsProducts } from './utils/getFilteredSavingsProducts';
import { getTopAnnualRateSavingsProducts } from './utils/getTopAnnualRateSavingsProducts';

export const savingsQueries = {
  all: () => ['savings'],
  products: () => [...savingsQueries.all(), 'products'],
  filteredProducts: (filterOption: SavingsProductFilterOption) => [...savingsQueries.products(), filterOption],
  topAnnualRateProducts: (filterOption: SavingsProductFilterOption) => [
    ...savingsQueries.filteredProducts(filterOption),
    'top-annual-rate',
  ],

  getFilteredProducts: (filterOption: SavingsProductFilterOption) =>
    queryOptions({
      queryKey: savingsQueries.filteredProducts(filterOption),
      queryFn: getSavingsProducts,
      select: savingsProducts => getFilteredSavingsProducts({ savingsProducts, filterOption }),
    }),
  getTopAnnualRateProducts: (filterOption: SavingsProductFilterOption) =>
    queryOptions({
      queryKey: savingsQueries.topAnnualRateProducts(filterOption),
      queryFn: getSavingsProducts,
      select: savingsProducts => {
        const filteredProducts = getFilteredSavingsProducts({ savingsProducts, filterOption });
        const RECOMMENDED_PRODUCT_COUNT = 2;

        return getTopAnnualRateSavingsProducts(filteredProducts, RECOMMENDED_PRODUCT_COUNT);
      },
    }),
};
