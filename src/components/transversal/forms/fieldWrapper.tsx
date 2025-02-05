import clsx from 'clsx'
import { ErrorOption } from 'react-hook-form'
const variants = {
  left: '',
  bottom: '',
}

export interface FieldWrapperProps {
  children: React.ReactNode
  className?: string
  description?: string
  descriptionId?: string
  error?: ErrorOption
  errorId?: string
  dirty?: boolean
  label?: React.ReactNode
  labelPosition?: 'top' | 'right' | 'left'
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  leftIcon?: React.ReactElement
  numberCharacters?: number
  variant?: keyof typeof variants
}

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  'description' | 'error' | 'label' | 'labelPosition' | 'labelProps' | 'leftIcon' | 'dirty'
>

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  className,
  description,
  descriptionId,
  dirty,
  error,
  errorId,
  label,
  labelPosition = 'top',
  labelProps = {},
  leftIcon,
  numberCharacters
}) => {

  const { className: labelClassName } = labelProps;

  return (
    <div className={`relative mb-3 ${className}`}>

      {label ? (
        <label
          {...labelProps}
          className={clsx(
            labelClassName,
            labelPosition === 'left' ? 'flex items-center gap-2' : '',
            labelPosition === 'right' ? 'flex flex-row-reverse gap-2 items-start' : '',

          )}
        >

          <span className={clsx('font-ubuntu mt-1',
            error ? (labelPosition !== 'right' && 'text-red-500') : (dirty ? 'text-primary' : 'text-grey-400'),
            labelPosition === 'top' ? 'mb-4' : ''
          )}>
            {label}
          </span>
          <div className='relative mt-1'>{children}</div>
        </label>
      ) : null}


      {!label ? children : null}
      <div className='absolute top-1.5 left-2 text-gray-400 icon '>
        {leftIcon}
      </div>

      {description ? (
        <span
          className={`block mt-1 text-sm text-gray-500 ${labelPosition === 'left' ? 'text-right' : ''
            }`}
          id={descriptionId}
        >
          {description}
        </span>
      ) : null}

      <div className={`w-full flex  ${numberCharacters ? (error ? 'justify-between' : 'justify-end') : 'justify-start'}`}>
        {error && (
          <span
            aria-live='assertive'
            className={`block text-sm text-red-400 ${labelPosition === 'left' ? 'text-right' : ''}`}
            id={errorId}
            role='alert'
          >
            {error?.message && <p><i className='circle-exclamation not-italic mr-1 text-red-500 font-medium' />{error.message}</p>}
          </span>)}
        {numberCharacters && <p className='text-grey-150 font-light'>{numberCharacters}</p>}
      </div>
    </div>
  )
}
