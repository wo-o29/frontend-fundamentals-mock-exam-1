import type { SavingsProduct } from 'feature/savings/savings.type';
import type { ReactNode } from 'react';
import { Spacing, Border } from 'tosslib';
import SavingsCalculatorResult from './SavingsCalculatorResult/SavingsCalculatorResult';

interface SavingsCalculatorResultSectionProps {
  selectedProduct: SavingsProduct | null;
  bottomAddon?: ReactNode;
}

function SavingsCalculatorResultSection({ selectedProduct, bottomAddon }: SavingsCalculatorResultSectionProps) {
  return (
    <>
      <Spacing size={8} />
      <SavingsCalculatorResult selectedProduct={selectedProduct} />
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
      {bottomAddon}
      <Spacing size={40} />
    </>
  );
}

export default SavingsCalculatorResultSection;
