import { Border, NavigationBar, Spacing } from 'tosslib';
import SavingsForm from './SavingsForm/SavingsForm';
import { SavingFromProvider } from './providers/SavingFromProvider';
import SavingsTabSection from './SavingsTabSection/SavingsTabSection';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />

      <SavingFromProvider>
        <SavingsForm />

        <Spacing size={24} />
        <Border height={16} />
        <Spacing size={8} />

        <SavingsTabSection />
      </SavingFromProvider>
    </>
  );
}
