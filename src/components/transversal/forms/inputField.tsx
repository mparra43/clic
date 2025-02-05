import clsx from 'clsx';
import { type ForwardedRef, forwardRef, useId } from 'react';
import { Control, Controller, Path,  } from 'react-hook-form';
import { errorInputClasses, inputClasses, focusInputClasses  } from './classes';
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper';

export interface InputFieldProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    FieldWrapperPassThroughProps {
  wrapperClassName?: string;
  control?: Control<any>;
  dirty?: boolean;
  name: Path<any>;
  numberCharacters?: number;
  rules?: any;
}

export const InputField = forwardRef(
  (
    {
      className,
      control,
      description,
      dirty,
      error,
      label,
      labelPosition,
      labelProps,
      leftIcon,
      name,
      wrapperClassName,
      rules,
      ...restOfProps
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const innerId = useId();
    const id = restOfProps.id ?? innerId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    return (
      <FieldWrapper
        className={wrapperClassName}
        description={description}
        descriptionId={descriptionId}
        dirty={dirty}
        error={error}
        errorId={errorId}
        label={label}
        labelPosition={labelPosition}
        labelProps={labelProps}
        leftIcon={leftIcon}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field:{name, value, ...res} }) => (
            <input
              id={name}
              value={value ?? ''}
              type='text'
              aria-describedby={`${descriptionId} ${errorId}`}
              className={clsx(
                className,
                inputClasses,
                focusInputClasses,
                error && errorInputClasses,
              )}
              {...res}
              {...restOfProps}
            />
          )}
        />
      </FieldWrapper>
    );
  },
);

InputField.displayName = 'InputField';

