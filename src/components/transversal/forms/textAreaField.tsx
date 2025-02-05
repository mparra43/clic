import clsx from 'clsx'
import type { Control, Path } from 'react-hook-form'
import { type ForwardedRef, forwardRef, useId } from 'react'
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper'
import { errorInputClasses, inputClasses } from './classes'
import { Controller } from 'react-hook-form'
import { Rules } from '@/interfaces'


interface TextAreaProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  FieldWrapperPassThroughProps {
  control?: Control<any>
  dirty?: boolean
  name: Path<any>
  numberCharacters?: number
  rules?: Rules
  wrapperClassName?: string
}

export const TextAreaField = forwardRef(
  (
    {
      control,
      children,
      className,
      description,
      error,
      dirty,
      label,
      labelPosition,
      labelProps,
      name,
      numberCharacters,
      rules,
      wrapperClassName,
      ...restOfProps
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
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
        dirty={dirty}
        label={label}
        labelPosition={labelPosition}
        labelProps={labelProps}
        numberCharacters={numberCharacters}
      >
        <Controller
          name={name}
          control={control}
          rules={{ required: rules?.required, maxLength: rules?.maxLength, minLength: rules?.minLength }}
          render={({ field }) => (
            <>
              <textarea
                className={clsx(inputClasses, className, `${error && errorInputClasses}`)}
                id={field.name}
                aria-describedby={`${descriptionId} ${errorId}`}
                {...field}
                {...restOfProps}
              >
                {children}
              </textarea>
            </>
          )}
        />
      </FieldWrapper>
    )
  }
)

TextAreaField.displayName = 'TextareaField'
