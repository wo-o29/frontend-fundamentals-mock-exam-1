import type { SavingsProduct } from 'feature/savings/savings.type';
import { useState } from 'react';

export const useSelectedSavingsProduct = () => {
  const [selectedSavingsProduct, setSelectedProductProduct] = useState<SavingsProduct | null>(null);

  const onSavingsProductSelect = (savingsProduct: SavingsProduct) => {
    setSelectedProductProduct(savingsProduct);
  };

  return { selectedSavingsProduct, onSavingsProductSelect };
};
