import TextFieldController from 'shared/components/TextFieldController/TextFieldController';
import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { parsePriceFromString } from 'shared/utils/parsePriceFromString';

function MonthlyAmountField() {
  return (
    <TextFieldController
      name="monthlyAmount"
      suffix="원"
      label="월 납입액"
      placeholder="희망 월 납입액을 입력하세요"
      transform={parsePriceFromString}
      formatDisplayValue={formatLocalePrice}
    />
  );
}

export default MonthlyAmountField;
