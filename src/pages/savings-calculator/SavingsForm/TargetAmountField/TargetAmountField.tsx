import TextFieldController from 'shared/components/TextFieldController/TextFieldController';
import { formatLocalePrice } from 'shared/utils/formatLocalePrice';
import { parseNumberFromString } from 'shared/utils/parseNumberFromString';

function TargetAmountField() {
  return (
    <TextFieldController
      name="targetAmount"
      suffix="원"
      label="목표 금액"
      placeholder="목표 금액을 입력하세요"
      transform={parseNumberFromString}
      formatDisplayValue={formatLocalePrice}
    />
  );
}

export default TargetAmountField;
