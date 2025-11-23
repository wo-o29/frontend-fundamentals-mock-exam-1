interface GetExpectedRevenueAmountParams {
  monthlyAmount: number;
  savingsPeriod: number;
  annualRate: number;
}

export const getExpectedRevenueAmount = ({
  monthlyAmount,
  savingsPeriod,
  annualRate,
}: GetExpectedRevenueAmountParams) => {
  const rawAmount = monthlyAmount * savingsPeriod * (1 + annualRate * 0.5);
  return Math.round(rawAmount / 1000) * 1000;
};
