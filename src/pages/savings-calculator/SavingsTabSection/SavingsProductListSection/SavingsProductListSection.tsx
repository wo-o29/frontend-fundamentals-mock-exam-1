import { ErrorBoundary } from '@suspensive/react';
import { SuspenseQuery } from '@suspensive/react-query';
import { savingsQueries } from 'feature/savings/savings.queries';
import type { SavingsProduct } from 'feature/savings/savings.type';
import { useSavingsFormDataContext } from 'pages/savings-calculator/providers/SavingFromProvider';
import { Suspense } from 'react';
import ErrorFallback from 'shared/components/ErrorFallback/ErrorFallback';
import SavingsProductList from './SavingsProductList/SavingsProductList';

interface FilteredSavingsProductListSectionProps {
  selectedProduct: SavingsProduct | null;
  onClickItem: (savingsProduct: SavingsProduct) => void;
}

function SavingsProductListSection({ selectedProduct, onClickItem }: FilteredSavingsProductListSectionProps) {
  const { monthlyAmount, savingsPeriod } = useSavingsFormDataContext();

  return (
    <ErrorBoundary fallback={({ error, reset }) => <ErrorFallback error={error} onClick={reset} />}>
      <Suspense fallback="적금 상품을 가져오는 중이에요...">
        <SuspenseQuery {...savingsQueries.getFilteredProducts({ monthlyAmount, savingsPeriod })}>
          {({ data: savingsProducts }) => (
            <SavingsProductList
              savingsProducts={savingsProducts}
              selectedProduct={selectedProduct}
              onClickItem={onClickItem}
            />
          )}
        </SuspenseQuery>
      </Suspense>
    </ErrorBoundary>
  );
}

export default SavingsProductListSection;
