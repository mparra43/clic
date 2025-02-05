import { type ForwardedRef, forwardRef, useId } from 'react'
import clsx from 'clsx'
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper'


export interface CheckboxFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  FieldWrapperPassThroughProps {
  wrapperClassName?: string
}

export const CheckboxField = forwardRef(
  (
    {
      description,
      error,
      label,
      labelPosition,
      labelProps,
      leftIcon,
      className,
      wrapperClassName,
      ...restOfProps
    }: CheckboxFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`
    

    return (
      <FieldWrapper
        className={wrapperClassName}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        label={label}
        labelPosition={labelPosition}
        labelProps={labelProps}
        leftIcon={leftIcon}
      >
        <input
          type='checkbox'
          aria-describedby={`${descriptionId} ${errorId}`}
          className={clsx(
            `${error ?'border-red-600':'border-grizzly-300'} rounded-sm  text-greeny-500 focus:outline-none focus:greeny-500 focus:ring-transparent `,
            className
          )}
          ref={ref}
          {...restOfProps}
        />
      </FieldWrapper>
    )
  }
)

CheckboxField.displayName = 'CheckboxField'
