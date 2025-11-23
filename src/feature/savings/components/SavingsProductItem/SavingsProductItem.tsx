import type { SavingsProduct } from 'feature/savings/savings.type';
import type { ReactNode } from 'react';
import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { ListRow, colors } from 'tosslib';

interface SavingsProductItemProps {
  savingsProduct: SavingsProduct;
  rightAddon?: ReactNode;
  onClick?: (savingsProduct: SavingsProduct) => void;
}

function SavingsProductItem({ savingsProduct, rightAddon, onClick }: SavingsProductItemProps) {
  const { name, annualRate, minMonthlyAmount, maxMonthlyAmount, availableTerms } = savingsProduct;

  return (
    <ListRow
      contents={
        <ListRow.Texts
          type="3RowTypeA"
          top={name}
          topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
          middle={`연 이자율: ${formatLocalePrice(annualRate)}%`}
          middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
          bottom={`${formatLocalePrice(minMonthlyAmount)}원 ~ ${formatLocalePrice(maxMonthlyAmount)}원 | ${availableTerms}개월`}
          bottomProps={{ fontSize: 13, color: colors.grey600 }}
        />
      }
      right={rightAddon}
      onClick={() => onClick?.(savingsProduct)}
    />
  );
}

export default SavingsProductItem;
