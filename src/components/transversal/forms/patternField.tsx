import clsx from 'clsx';
import { Control, Controller, Path, PathValue, ValidationRule, } from 'react-hook-form';
import { errorInputClasses, inputClasses, focusInputClasses } from './classes';
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper';
import { InputAttributes, PatternFormat, PatternFormatProps } from 'react-number-format';
import { Rules } from './numericField';
import { useEffect, useState } from 'react';
import { formatPattern } from '@/constants/patterns';

export type PatternFieldProps<T extends Record<string, unknown> = Record<string, unknown>> =
  FieldWrapperPassThroughProps &
  PatternFormatProps<InputAttributes> & {
    control?: Control<T, any>
    name?: Path<T>
    rules?: Rules
    isDirty?: boolean
    currentValue: string;
  }
export const PatternField = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  className,
  control,
  currentValue,
  dirty,
  defaultValue,
  error,
  label,
  labelProps,
  name,
  onValueChange,
  required,
  rules,
  ...rest
}: PatternFieldProps<TFormValues>) => {
  const patternFormatProps = {
    ...rest,
    required,
    defaultValue,
    name,
    onValueChange,
  }
  patternFormatProps.defaultValue = defaultValue;



  const getValue = (value: string) => {
    if (control?._formState.isSubmitSuccessful) return ''
    else return value
  }

  
  return (
    <FieldWrapper
      dirty={dirty}
      error={error}
      label={label}
      labelProps={labelProps}>
      {control && name && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={
            (patternFormatProps.defaultValue ?? patternFormatProps.value) as PathValue<
              TFormValues,
              string & Path<TFormValues>
            >
          }
          render={({ field: { name, value, onChange } }) => (
            <PatternFormat
            className={clsx(className, inputClasses, focusInputClasses, error && errorInputClasses, defaultValue && '!bg-grey-170')}
              value={defaultValue ? defaultValue : getValue(value as string)}
              {...rest}
              name={name}
              onValueChange={(values, sourceInfo) => {
                onChange(values.value)
                onValueChange && onValueChange(values, sourceInfo)
              }}
            />
          )}

        />
      )}
    </FieldWrapper>
  );
}



