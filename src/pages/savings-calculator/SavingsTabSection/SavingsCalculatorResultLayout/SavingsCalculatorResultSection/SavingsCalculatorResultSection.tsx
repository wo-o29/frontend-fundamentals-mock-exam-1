import { ListRow } from 'tosslib';
import SavingsCalculationResult from './SavingsCalculationResult/SavingsCalculationResult';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import { SuspenseQuery } from '@suspensive/react-query';
import { savingsQueries } from 'feature/savings/savings.queries';
import ErrorFallback from 'shared/components/ErrorFallback/ErrorFallback';

interface SavingsCalculatorResultSectionProps {
  selectedProductId: string | null;
}

function SavingsCalculatorResultSection({ selectedProductId }: SavingsCalculatorResultSectionProps) {
  if (selectedProductId === null) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해 주세요." />} />;
  }

  return (
    <ErrorBoundary fallback={({ error, reset }) => <ErrorFallback error={error} onClick={reset} />}>
      <Suspense fallback="적금을 계산하는 중이에요...">
        <SuspenseQuery {...savingsQueries.getProductDetail(selectedProductId)}>
          {({ data: savingsProduct }) => <SavingsCalculationResult annualRate={savingsProduct.annualRate} />}
        </SuspenseQuery>
      </Suspense>
    </ErrorBoundary>
  );
}

export default SavingsCalculatorResultSection;
