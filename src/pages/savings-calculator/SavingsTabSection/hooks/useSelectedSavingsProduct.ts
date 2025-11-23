import { useState } from 'react';

export const useSelectedProductId = () => {
  const [selectedProductId, setSelectedProductProductId] = useState<string | null>(null);

  const onSavingsProductSelect = (id: string) => {
    setSelectedProductProductId(id);
  };

  return { selectedProductId, onSavingsProductSelect };
};
