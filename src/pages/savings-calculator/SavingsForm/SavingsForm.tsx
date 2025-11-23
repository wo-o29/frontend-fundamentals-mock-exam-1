import { Spacing } from 'tosslib';
import MonthlyAmountField from './MonthlyAmountField/MonthlyAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import TargetAmountField from './TargetAmountField/TargetAmountField';

function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <TargetAmountField />
      <Spacing size={16} />
      <MonthlyAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}

export default SavingsForm;
