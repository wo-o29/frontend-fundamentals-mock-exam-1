interface GetDiffTargetAmountParams {
  targetAmount: number;
  expectedRevenueAmount: number;
}

export const getDiffTargetAmount = ({ targetAmount, expectedRevenueAmount }: GetDiffTargetAmountParams) => {
  return targetAmount - expectedRevenueAmount;
};
