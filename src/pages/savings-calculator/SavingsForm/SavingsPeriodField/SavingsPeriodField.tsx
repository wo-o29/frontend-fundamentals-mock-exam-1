import SelectFieldController from 'shared/components/SelectFieldController/SelectFieldController';

function SavingsPeriodField() {
  return (
    <SelectFieldController
      name="savingsPeriod"
      label="저축 기간"
      title="저축 기간을 선택해주세요"
      options={[
        { label: '6개월', value: 6 },
        { label: '12개월', value: 12 },
        { label: '24개월', value: 24 },
      ]}
    />
  );
}

export default SavingsPeriodField;
