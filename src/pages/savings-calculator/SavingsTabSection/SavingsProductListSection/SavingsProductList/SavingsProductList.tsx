import SavingsProductItem from 'feature/savings/components/SavingsProductItem/SavingsProductItem';
import type { SavingsProduct } from 'feature/savings/savings.type';
import { Separated } from 'react-simplikit';
import { ListRow, Border, Assets } from 'tosslib';

interface SavingsProductList1Props {
  savingsProducts: SavingsProduct[];
  selectedProduct: SavingsProduct | null;
  onClickItem: (savingsProduct: SavingsProduct) => void;
}

function SavingsProductList({ savingsProducts, selectedProduct, onClickItem }: SavingsProductList1Props) {
  if (savingsProducts.length === 0) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="조건에 맞는 적금 상품이 없어요." />} />;
  }

  return (
    <Separated by={<Border height={1} />}>
      {savingsProducts.map(savingsProduct => {
        const isSelected = selectedProduct?.name === savingsProduct.name;

        return (
          <SavingsProductItem
            key={savingsProduct.id}
            savingsProduct={savingsProduct}
            rightAddon={isSelected && <Assets.Icon name="icon-check-circle-green" />}
            onClick={onClickItem}
          />
        );
      })}
    </Separated>
  );
}

export default SavingsProductList;
