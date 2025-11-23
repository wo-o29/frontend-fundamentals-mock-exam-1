import { match } from 'ts-pattern';
import { useSavingsTab } from './hooks/useSavingsTab';
import { useSelectedProductId } from './hooks/useSelectedSavingsProduct';
import RecommendSavingsProductSection from './RecommendSavingsProductSection/RecommendSavingsProductSection';
import SavingsCalculatorResultLayout from './SavingsCalculatorResultLayout/SavingsCalculatorResultLayout';
import SavingsProductListSection from './SavingsProductListSection/SavingsProductListSection';
import SavingsTab from './SavingsTab/SavingsTab';

function SavingsTabSection() {
  const { currentSavingsTab, onSavingsTabChange } = useSavingsTab();
  const { selectedProductId, onSavingsProductSelect } = useSelectedProductId();

  return (
    <>
      <SavingsTab currentTab={currentSavingsTab} onChange={onSavingsTabChange} />
      {match(currentSavingsTab)
        .with('products', () => (
          <SavingsProductListSection selectedProductId={selectedProductId} onClickItem={onSavingsProductSelect} />
        ))
        .with('results', () => (
          <SavingsCalculatorResultLayout
            selectedProductId={selectedProductId}
            bottomAddon={
              <RecommendSavingsProductSection
                selectedProductId={selectedProductId}
                onClickItem={onSavingsProductSelect}
              />
            }
          />
        ))
        .exhaustive()}
    </>
  );
}

export default SavingsTabSection;
