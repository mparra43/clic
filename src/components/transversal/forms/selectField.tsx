'use client'
import clsx from 'clsx'
import { type ForwardedRef, forwardRef, useId, useState } from 'react'
import { inputClasses } from './classes'
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper'
import { Control, Controller, Path } from 'react-hook-form';

export interface Option {
  label: string
  value: string | number | string[]
}

export interface SelectFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    FieldWrapperPassThroughProps {
  control?: Control<any>;
  dirty?: boolean;
  name: Path<any>;
  options: Option[];
  rules?: any;
  wrapperClassName?: string;
  defaultValue?: string;
}
export const SelectField = forwardRef(
  (
    {
      control,
      className,
      description,
      defaultValue,
      error,
      dirty,
      label,
      labelPosition,
      labelProps,
      name,
      options,
      placeholder,
      rules,
      wrapperClassName,
      ...restOfProps
    }: SelectFieldProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
      <FieldWrapper
        className={clsx(wrapperClassName, 'relative')}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        dirty={dirty}
        label={label}
        labelPosition={labelPosition}
        labelProps={labelProps}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{ required: rules?.required, maxLength: rules?.maxLength, minLength: rules?.minLength }}
          render={({ field }) => (
            <>
              <button className={clsx(inputClasses, 'flex items-center justify-between', isOpen && 'border-primary-200', error && '!border-red-500', defaultValue && '!bg-grey-170')} type="button" onClick={toggleDropdown}>
                <p className={`text-base ${field.value ? 'text-dark-200 font-normal' : 'text-grey-300'} font-ubuntu`}>{field.value ? field.value : placeholder}</p>
                <i className={`${isOpen ? 'angle-up' : 'angle-down'} text-xl text-dark-300 mt-1`} />
              </button>

              <div className={`${isOpen ? 'bock' : 'hidden'} w-full z-10 border-t border-t-grey-160 border-x border-b border-primary-200 rounded-b-md bg-white absolute top-11`}>
                <ul className='w-full max-h-48 overflow-y-scroll scrollbar-custom'>
                  {options.map(({ label }, index) => (
                    <li className='w-full block py-2.5 px-4 text-base text-dark-200 font-ubuntu font-light hover:bg-gray-100 dark:hover:bg-gray-60 hover:font-normal' key={index} onClick={() => {
                      field.onChange(label)
                    }}>{label}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        />
      </FieldWrapper>
    )
  }
)

SelectField.displayName = 'SelectField'
