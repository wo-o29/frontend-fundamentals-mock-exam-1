import { ErrorBoundary } from '@suspensive/react';
import { SuspenseQuery } from '@suspensive/react-query';
import { savingsQueries } from 'feature/savings/savings.queries';
import type { SavingsProduct } from 'feature/savings/savings.type';
import { useSavingsFormDataContext } from 'pages/savings-calculator/providers/SavingFromProvider';
import { Suspense } from 'react';
import ErrorFallback from 'shared/components/ErrorFallback/ErrorFallback';
import { ListHeader, Spacing } from 'tosslib';
import RecommendSavingsProductList from './RecommendSavingsProductList/RecommendSavingsProductList';

interface RecommendSavingsProductSectionProps {
  selectedProduct: SavingsProduct | null;
  onClickItem: (savingsProduct: SavingsProduct) => void;
}

function RecommendSavingsProductSection({ selectedProduct, onClickItem }: RecommendSavingsProductSectionProps) {
  const { monthlyAmount, savingsPeriod } = useSavingsFormDataContext();

  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <ErrorBoundary fallback={({ error, reset }) => <ErrorFallback error={error} onClick={reset} />}>
        <Suspense fallback="추천 상품을 가져오는 중이에요...">
          <SuspenseQuery {...savingsQueries.getTopAnnualRateProducts({ monthlyAmount, savingsPeriod })}>
            {({ data: savingsProducts }) => (
              <RecommendSavingsProductList
                recommendSavingsProducts={savingsProducts}
                selectedProduct={selectedProduct}
                onClickItem={onClickItem}
              />
            )}
          </SuspenseQuery>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default RecommendSavingsProductSection;
