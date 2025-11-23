import { http, isHttpError } from 'tosslib';
import type { SavingsProduct } from '../savings.type';

export const getSavingsProducts = async (): Promise<SavingsProduct[]> => {
  try {
    return await http.get<SavingsProduct[]>('/api/savings-products');
  } catch (error) {
    if (isHttpError(error)) {
      throw new Error('적금 상품을 불러오는 데 실패했어요.');
    }

    throw error;
  }
};
