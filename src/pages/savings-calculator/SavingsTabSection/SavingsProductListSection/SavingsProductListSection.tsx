import { ErrorBoundary } from '@suspensive/react';
import { SuspenseQuery } from '@suspensive/react-query';
import { savingsQueries } from 'feature/savings/savings.queries';
import { useSavingsFormDataContext } from 'pages/savings-calculator/providers/SavingFromProvider';
import { Suspense } from 'react';
import ErrorFallback from 'shared/components/ErrorFallback/ErrorFallback';
import SavingsProductList from './SavingsProductList/SavingsProductList';

interface FilteredSavingsProductListSectionProps {
  selectedProductId: string | null;
  onClickItem: (id: string) => void;
}

function SavingsProductListSection({ selectedProductId, onClickItem }: FilteredSavingsProductListSectionProps) {
  const { monthlyAmount, savingsPeriod } = useSavingsFormDataContext();

  return (
    <ErrorBoundary fallback={({ error, reset }) => <ErrorFallback error={error} onClick={reset} />}>
      <Suspense fallback="적금 상품을 가져오는 중이에요...">
        <SuspenseQuery {...savingsQueries.getFilteredProducts({ monthlyAmount, savingsPeriod })}>
          {({ data: savingsProducts }) => (
            <SavingsProductList
              savingsProducts={savingsProducts}
              selectedProductId={selectedProductId}
              onClickItem={onClickItem}
            />
          )}
        </SuspenseQuery>
      </Suspense>
    </ErrorBoundary>
  );
}

export default SavingsProductListSection;
