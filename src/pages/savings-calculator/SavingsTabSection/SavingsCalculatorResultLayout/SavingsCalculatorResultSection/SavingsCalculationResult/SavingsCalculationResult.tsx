import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { ListRow, colors } from 'tosslib';
import { useSavingsCalculator } from './hooks/useSavingsCalculator';
import { formatSavingsResults } from './utils/formatSavingsResults';

interface SavingsCalculationResultProps {
  annualRate: number;
}

function SavingsCalculationResult({ annualRate }: SavingsCalculationResultProps) {
  const savingsCalculatorResult = useSavingsCalculator(annualRate);

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

export default SavingsCalculationResult;
