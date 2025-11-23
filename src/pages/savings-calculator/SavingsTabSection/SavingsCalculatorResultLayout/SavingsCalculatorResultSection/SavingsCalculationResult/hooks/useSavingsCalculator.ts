import { useSavingsFormDataContext } from 'pages/savings-calculator/providers/SavingFromProvider';
import { getExpectedRevenueAmount } from '../utils/getExpectedRevenueAmount';
import { getDiffTargetAmount } from '../utils/getDiffTargetAmount';
import { getRecommendMonthlyPayAmount } from '../utils/getRecommendMonthlyPayAmount';

export const useSavingsCalculator = (annualRate: number) => {
  const { targetAmount, monthlyAmount, savingsPeriod } = useSavingsFormDataContext();

  const expectedRevenueAmount = getExpectedRevenueAmount({ monthlyAmount, savingsPeriod, annualRate });
  const diffTargetAmount = getDiffTargetAmount({
    targetAmount,
    expectedRevenueAmount,
  });
  const recommendMonthlyPayAmount = getRecommendMonthlyPayAmount({ targetAmount, savingsPeriod, annualRate });

  return {
    expectedRevenueAmount,
    diffTargetAmount,
    recommendMonthlyPayAmount,
  };
};
