import type { ReactNode } from 'react';
import { Spacing, Border } from 'tosslib';
import SavingsCalculatorResultSection from './SavingsCalculatorResultSection/SavingsCalculatorResultSection';

interface SavingsCalculatorResultLayoutProps {
  selectedProductId: string | null;
  bottomAddon?: ReactNode;
}

function SavingsCalculatorResultLayout({ selectedProductId, bottomAddon }: SavingsCalculatorResultLayoutProps) {
  return (
    <>
      <Spacing size={8} />
      <SavingsCalculatorResultSection selectedProductId={selectedProductId} />
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
      {bottomAddon}
      <Spacing size={40} />
    </>
  );
}

export default SavingsCalculatorResultLayout;
