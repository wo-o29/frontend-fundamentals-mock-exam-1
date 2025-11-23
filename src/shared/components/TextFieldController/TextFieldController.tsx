import type { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from 'tosslib';

type TextFieldProps = ComponentProps<typeof TextField>;

interface TextFieldControllerProps<V> extends TextFieldProps {
  name: string;
  transform?: (value: string) => V;
  formatDisplayValue?: (value: V) => string;
}

function TextFieldController<T>({ name, transform, formatDisplayValue, ...props }: TextFieldControllerProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          onChange={e => {
            const value = e.target.value;
            field.onChange(transform?.(value));
          }}
          value={formatDisplayValue?.(field.value)}
        />
      )}
    />
  );
}

export default TextFieldController;
