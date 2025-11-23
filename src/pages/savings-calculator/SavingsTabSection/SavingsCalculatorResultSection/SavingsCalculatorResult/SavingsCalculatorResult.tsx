import type { SavingsProduct } from 'feature/savings/savings.type';
import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { ListRow, colors } from 'tosslib';
import { useSavingsCalculator } from './hooks/useSavingsCalculator';
import { formatSavingsResults } from './utils/formatSavingsResults';

interface SavingsCalculatorResultProps {
  selectedProduct: SavingsProduct | null;
}

function SavingsCalculatorResult({ selectedProduct }: SavingsCalculatorResultProps) {
  const savingsCalculatorResult = useSavingsCalculator(selectedProduct?.annualRate);

  if (selectedProduct === null) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해 주세요." />} />;
  }

  return formatSavingsResults(savingsCalculatorResult).map(({ label, price }) => (
    <ListRow
      key={label}
      contents={
        <ListRow.Texts
          type="2RowTypeA"
          top={label}
          topProps={{ color: colors.grey600 }}
          bottom={`${formatLocalePrice(price)}원`}
          bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
        />
      }
    />
  ));
}

export default SavingsCalculatorResult;
