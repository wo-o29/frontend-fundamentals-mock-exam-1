import type { SavingsProduct } from '../savings.type';

interface FilterProductsBySavingsPeriodParams {
  savingsProducts: SavingsProduct[];
  savingsPeriod: number;
}

export const filterProductsBySavingsPeriod = ({
  savingsProducts,
  savingsPeriod,
}: FilterProductsBySavingsPeriodParams) => {
  if (savingsPeriod === 0) {
    return savingsProducts;
  }

  return savingsProducts.filter(product => product.availableTerms === savingsPeriod);
};
