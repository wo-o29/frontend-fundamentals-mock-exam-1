import { isInRange } from 'shared/utils/isInRange';
import type { SavingsProduct } from '../savings.type';

interface FilterProductsByMonthlyAmountParams {
  savingsProducts: SavingsProduct[];
  monthlyAmount: number;
}

export const filterProductsByMonthlyAmount = ({
  savingsProducts,
  monthlyAmount,
}: FilterProductsByMonthlyAmountParams) => {
  if (monthlyAmount === 0) {
    return savingsProducts;
  }

  return savingsProducts.filter(product =>
    isInRange(monthlyAmount, product.minMonthlyAmount, product.maxMonthlyAmount)
  );
};
