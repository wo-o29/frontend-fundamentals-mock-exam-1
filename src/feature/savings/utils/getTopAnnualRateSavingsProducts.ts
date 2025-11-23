import type { SavingsProduct } from '../savings.type';

export const getTopAnnualRateSavingsProducts = (products: SavingsProduct[], count: number) => {
  return [...products].sort((a, b) => b.annualRate - a.annualRate).slice(0, count);
};
