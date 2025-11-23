interface FormatSavingsResults {
  expectedRevenueAmount: number;
  diffTargetAmount: number;
  recommendMonthlyPayAmount: number;
}

export const formatSavingsResults = ({
  expectedRevenueAmount,
  diffTargetAmount,
  recommendMonthlyPayAmount,
}: FormatSavingsResults) => {
  return [
    { label: '예상 수익 금액', price: expectedRevenueAmount },
    {
      label: '목표 금액과의 차이',
      price: diffTargetAmount,
    },
    {
      label: '추천 월 납입 금액',
      price: recommendMonthlyPayAmount,
    },
  ];
};
