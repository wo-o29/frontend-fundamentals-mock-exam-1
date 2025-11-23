import type { SavingsProduct, SavingsProductFilterOption } from '../savings.type';
import { filterProductsByMonthlyAmount } from './filterProductsByMonthlyAmount';
import { filterProductsBySavingsPeriod } from './filterProductsBySavingsPeriod';

interface GetFilteredSavingsProductsParams {
  savingsProducts: SavingsProduct[];
  filterOption: SavingsProductFilterOption;
}

export const getFilteredSavingsProducts = ({ savingsProducts, filterOption }: GetFilteredSavingsProductsParams) => {
  const { monthlyAmount, savingsPeriod } = filterOption;

  const monthlyFilteredSavings = filterProductsByMonthlyAmount({
    savingsProducts,
    monthlyAmount,
  });

  const periodFilteredSavings = filterProductsBySavingsPeriod({
    savingsProducts: monthlyFilteredSavings,
    savingsPeriod,
  });

  return periodFilteredSavings;
};
