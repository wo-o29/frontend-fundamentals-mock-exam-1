import { useSavingsTab } from './hooks/useSavingsTab';
import { useSelectedSavingsProduct } from './hooks/useSelectedSavingsProduct';
import SavingsProductListSection from './SavingsProductListSection/SavingsProductListSection';
import SavingsTab from './SavingsTab/SavingsTab';
import { match } from 'ts-pattern';
import SavingsCalculatorResultSection from './SavingsCalculatorResultSection/SavingsCalculatorResultSection';
import RecommendSavingsProductSection from './RecommendSavingsProductSection/RecommendSavingsProductSection';

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
              <RecommendSavingsProductSection
                selectedProduct={selectedSavingsProduct}
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
