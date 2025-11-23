import TextFieldController from 'shared/components/TextFieldController/TextFieldController';
import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { parsePriceFromString } from 'shared/utils/parsePriceFromString';

function TargetAmountField() {
  return (
    <TextFieldController
      name="targetAmount"
      suffix="원"
      label="목표 금액"
      placeholder="목표 금액을 입력하세요"
      transform={parsePriceFromString}
      formatDisplayValue={formatLocalePrice}
    />
  );
}

export default TargetAmountField;
