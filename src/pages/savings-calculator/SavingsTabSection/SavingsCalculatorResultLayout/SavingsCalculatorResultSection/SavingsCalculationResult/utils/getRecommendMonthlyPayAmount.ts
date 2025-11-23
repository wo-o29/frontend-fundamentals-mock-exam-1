interface GetRecommendMonthlyPayAmountParams {
  targetAmount: number;
  savingsPeriod: number;
  annualRate: number;
}

export const getRecommendMonthlyPayAmount = ({
  targetAmount,
  savingsPeriod,
  annualRate,
}: GetRecommendMonthlyPayAmountParams) => {
  if (savingsPeriod === 0) {
    return 0;
  }

  const rawAmount = targetAmount / (savingsPeriod * (1 + annualRate * 0.5));
  return Math.ceil(rawAmount / 1000) * 1000;
};
