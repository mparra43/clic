import clsx from 'clsx'
import type { Control, Path, PathValue, ValidationRule } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { InputAttributes, NumberFormatValues, NumericFormatProps } from 'react-number-format'
import { NumericFormat } from 'react-number-format'
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper'
import { errorInputClasses, focusInputClasses, inputClasses } from './classes'


export type ValueAs = 'number' | 'string' | 'format'
export type FormatAs = 'currency'
export type Rules = {
  required?: string | ValidationRule<boolean>
  min?: ValidationRule<string | number>
  max?: ValidationRule<string | number>
}

export type NumericFieldProps<T extends Record<string, unknown> = Record<string, unknown>> =
  FieldWrapperPassThroughProps &
  NumericFormatProps<InputAttributes> & {
    control?: Control<T, any>
    name?: Path<T>
    valueAs?: ValueAs
    formatAs?: FormatAs
    rules?: Rules
    isDirty?: boolean
  }

const valueKeyByType: { [k in ValueAs]: keyof NumberFormatValues } = {
  format: 'formattedValue' ,
  number: 'floatValue',
  string: 'value'
}

export const NumericField = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  className,
  control,
  dirty,
  defaultValue,
  error,
  formatAs,
  label,
  labelProps,
  name,
  onValueChange,
  valueAs = 'number',
  required,
  rules,
  suffix,
  ...rest
}: NumericFieldProps<TFormValues>) => {
  const numericFormatProps = {
    ...(formatAs && formatAsProps[formatAs]),
    ...rest,
    required,
    defaultValue,
    suffix,
    name,
    onValueChange,
    className: clsx(className, inputClasses, focusInputClasses, error && errorInputClasses, defaultValue && '!bg-grey-170')
  }
  numericFormatProps.defaultValue = defaultValue;

  const getValue = (value:string) => {
    if (control?._formState.isSubmitSuccessful) return ''
    else return value
  }

  return (
    <FieldWrapper
      dirty={dirty}
      error={error}
      label={label}
      labelProps={labelProps}
    >
      {control && name ? (
        <Controller
          control={control}
          defaultValue={
            (numericFormatProps.defaultValue ?? numericFormatProps.value) as PathValue<
              TFormValues,
              string & Path<TFormValues>
            >
          }
          rules={rules}
          name={name}
          render={({ field: { name, value, onChange } }) => (
            <NumericFormat
              value={defaultValue ?defaultValue:getValue(value as string)}
              {...numericFormatProps}
              name={name}
              onValueChange={(values, sourceInfo) => {
                onChange(values.value ? values[valueKeyByType[valueAs]] : '')
                onValueChange && onValueChange(values, sourceInfo)
              }}
            />
          )}
        />
      ) : (
        <NumericFormat {...numericFormatProps} />
      )}
    </FieldWrapper>
  )
}

type FormatAsProps = {
  [k in FormatAs]: NumericFormatProps<InputAttributes>
}

const formatAsProps: FormatAsProps = {
  currency: {
    prefix: '$',
    thousandSeparator: true,
    decimalSeparator: '.'
  }
}
