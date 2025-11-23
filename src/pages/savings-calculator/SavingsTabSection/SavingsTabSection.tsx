import { Spacing, ListRow, colors, ListHeader } from 'tosslib';
import { useSavingsTab } from './hooks/useSavingsTab';
import { useSelectedSavingsProduct } from './hooks/useSelectedSavingsProduct';
import SavingsProductListSection from './SavingsProductListSection/SavingsProductListSection';
import SavingsTab from './SavingsTab/SavingsTab';
import { match } from 'ts-pattern';
import SavingsCalculatorResultSection from './SavingsCalculatorResultSection/SavingsCalculatorResultSection';

function SavingsTabSection() {
  const { currentSavingsTab, onSavingsTabChange } = useSavingsTab();
  const { selectedSavingsProduct, onSavingsProductSelect } = useSelectedSavingsProduct();

  return (
    <>
      <SavingsTab currentTab={currentSavingsTab} onChange={onSavingsTabChange} />
      {match(currentSavingsTab)
        .with('products', () => (
          <SavingsProductListSection selectedProduct={selectedSavingsProduct} onClickItem={onSavingsProductSelect} />
        ))
        .with('results', () => (
          <SavingsCalculatorResultSection
            selectedProduct={selectedSavingsProduct}
            bottomAddon={
              <>
                <ListHeader
                  title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>}
                />
                <Spacing size={12} />
                <ListRow
                  contents={
                    <ListRow.Texts
                      type="3RowTypeA"
                      top={'기본 정기적금'}
                      topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
                      middle={`연 이자율: 3.2%`}
                      middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
                      bottom={`100,000원 ~ 500,000원 | 12개월`}
                      bottomProps={{ fontSize: 13, color: colors.grey600 }}
                    />
                  }
                  onClick={() => {}}
                />
                <ListRow
                  contents={
                    <ListRow.Texts
                      type="3RowTypeA"
                      top={'고급 정기적금'}
                      topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
                      middle={`연 이자율: 2.8%`}
                      middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
                      bottom={`50,000원 ~ 1,000,000원 | 24개월`}
                      bottomProps={{ fontSize: 13, color: colors.grey600 }}
                    />
                  }
                  onClick={() => {}}
                />
                <Spacing size={40} />
              </>
            }
          />
        ))
        .exhaustive()}
    </>
  );
}

export default SavingsTabSection;
