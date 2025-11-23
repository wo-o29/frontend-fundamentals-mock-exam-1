import { queryOptions } from '@tanstack/react-query';
import { getSavingsProducts } from './apis/getSavingsProducts';
import type { SavingsProduct, SavingsProductFilterOption } from './savings.type';
import { getFilteredSavingsProducts } from './utils/getFilteredSavingsProducts';
import { getTopAnnualRateSavingsProducts } from './utils/getTopAnnualRateSavingsProducts';

export const savingsQueries = {
  all: () => ['savings'],
  products: () => [...savingsQueries.all(), 'products'],
  productDetail: (id: string) => [...savingsQueries.products(), id],
  filteredProducts: (filterOption: SavingsProductFilterOption) => [...savingsQueries.products(), filterOption],
  topAnnualRateProducts: (filterOption: SavingsProductFilterOption) => [
    ...savingsQueries.filteredProducts(filterOption),
    'top-annual-rate',
  ],

  getProductDetail: (id: string) =>
    queryOptions({
      queryKey: savingsQueries.productDetail(id),
      queryFn: getSavingsProducts,
      select: savingsProducts => savingsProducts.find(product => product.id === id) as SavingsProduct,
    }),
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
