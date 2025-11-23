import type { ReactNode } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

export interface SavingsFormData {
  targetAmount?: number;
  monthlyAmount?: number;
  savingsPeriod?: number;
}

interface SavingFromProviderProps {
  children: ReactNode;
}

export function SavingFromProvider({ children }: SavingFromProviderProps) {
  const methods = useForm<SavingsFormData>();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export const useSavingsFormDataContext = (): Required<SavingsFormData> => {
  const { watch } = useFormContext();
  const targetAmount = watch('targetAmount') ?? 0;
  const monthlyAmount = watch('monthlyAmount') ?? 0;
  const savingsPeriod = watch('savingsPeriod') ?? 0;

  return { targetAmount, monthlyAmount, savingsPeriod };
};
