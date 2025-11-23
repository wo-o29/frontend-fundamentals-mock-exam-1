import SavingsProductItem from 'feature/savings/components/SavingsProductItem/SavingsProductItem';
import type { SavingsProduct } from 'feature/savings/savings.type';
import { Separated } from 'react-simplikit';
import { ListRow, Border, Assets } from 'tosslib';

interface RecommendSavingsProductListProps {
  recommendSavingsProducts: SavingsProduct[];
  selectedProductId: string | null;
  onClickItem: (id: string) => void;
}

function RecommendSavingsProductList({
  recommendSavingsProducts,
  selectedProductId,
  onClickItem,
}: RecommendSavingsProductListProps) {
  if (recommendSavingsProducts.length === 0) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="조건에 맞는 추천 상품이 없어요." />} />;
  }

  return (
    <Separated by={<Border height={1} />}>
      {recommendSavingsProducts.map(savingsProduct => {
        const isSelected = selectedProductId === savingsProduct.id;

        return (
          <SavingsProductItem
            key={savingsProduct.id}
            savingsProduct={savingsProduct}
            rightAddon={isSelected && <Assets.Icon name="icon-check-circle-green" />}
            onClick={() => onClickItem(savingsProduct.id)}
          />
        );
      })}
    </Separated>
  );
}

export default RecommendSavingsProductList;
