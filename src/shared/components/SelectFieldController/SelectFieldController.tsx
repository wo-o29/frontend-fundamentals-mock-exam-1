import type { ComponentProps } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { SelectBottomSheet } from 'tosslib';

type SelectBottomSheetProps = Omit<ComponentProps<typeof SelectBottomSheet>, 'value' | 'onChange' | 'children'>;

interface SelectOption {
  label: string;
  value: number;
}

interface SelectFieldControllerProps extends SelectBottomSheetProps {
  name: string;
  options: SelectOption[];
}

function SelectFieldController({ name, options, ...props }: SelectFieldControllerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectBottomSheet {...props} value={field.value} onChange={field.onChange}>
          {options.map(({ label, value }) => (
            <SelectBottomSheet.Option key={value} value={value}>
              {label}
            </SelectBottomSheet.Option>
          ))}
        </SelectBottomSheet>
      )}
    />
  );
}

export default SelectFieldController;
