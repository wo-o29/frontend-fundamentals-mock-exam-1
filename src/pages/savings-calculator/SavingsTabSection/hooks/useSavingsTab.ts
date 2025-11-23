import { useState } from 'react';
import type { SavingsTabType } from '../savingsTab.constants';

export const useSavingsTab = () => {
  const [currentSavingsTab, setCurrentTab] = useState<SavingsTabType>('products');

  const onSavingsTabChange = (tab: SavingsTabType) => {
    setCurrentTab(tab);
  };

  return { currentSavingsTab, onSavingsTabChange };
};
