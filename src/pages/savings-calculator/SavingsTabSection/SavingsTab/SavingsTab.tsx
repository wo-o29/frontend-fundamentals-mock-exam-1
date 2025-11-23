import { Tab } from 'tosslib';
import { type SavingsTabType, SAVINGS_TAB_ITEMS } from '../savingsTab.constants';

interface SavingsTabProps {
  currentTab: SavingsTabType;
  onChange: (tab: SavingsTabType) => void;
}

function SavingsTab({ currentTab, onChange }: SavingsTabProps) {
  return (
    <Tab onChange={value => onChange(value as SavingsTabType)}>
      {SAVINGS_TAB_ITEMS.map(({ label, value }) => (
        <Tab.Item key={value} value={value} selected={currentTab === value}>
          {label}
        </Tab.Item>
      ))}
    </Tab>
  );
}

export default SavingsTab;
