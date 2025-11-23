export const SAVINGS_TAB_ITEMS = [
  { label: '적금 상품', value: 'products' },
  { label: '계산 결과', value: 'results' },
] as const;

export type SavingsTabType = (typeof SAVINGS_TAB_ITEMS)[number]['value'];
