import clsx from 'clsx';
import { ForwardedRef, forwardRef, Suspense, useId, useState } from 'react';
import { Control, Controller, Path, RegisterOptions } from 'react-hook-form';
import { errorInputClasses, focusInputClasses, inputClasses } from './classes';
import { FieldWrapper, FieldWrapperPassThroughProps } from './fieldWrapper';
import { Option } from '@/interfaces';
import { filterOptionsToSelect, normalizeText } from '@/lib';


export interface SearchFieldProps
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
  options: Option[];
  rules?: any;
  currentValue: string;
}

export const SearchField = forwardRef(
  (
    {
      className,
      control,
      currentValue,
      description,
      dirty,
      error,
      label,
      labelPosition,
      labelProps,
      leftIcon,
      name,
      options,
      wrapperClassName,
      rules,
      ...restOfProps
    }: SearchFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const innerId = useId();
    const id = restOfProps.id ?? innerId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;


    const findIndexTerm = (label:string)=> {

      if (!currentValue) return label;

      const normalizedText = normalizeText(label); 
      const normalizedCurrentValue = normalizeText(currentValue); 
  
      const regex = new RegExp(`(${normalizedCurrentValue})`, 'gi');
      const parts = normalizedText.split(regex);
  
      return parts.map((part, index) =>
        normalizeText(part) === normalizedCurrentValue ? (
          <b key={index}>{label.substring(normalizedText.indexOf(part), normalizedText.indexOf(part) + part.length)}</b>
        ) : (
          label.substring(normalizedText.indexOf(part), normalizedText.indexOf(part) + part.length)
        )
      );
      
    }


    const findMatchingLabel = (label: string, key:number,  onChange:(label: string)=>void) => {
      return (<li className='w-full block py-2.5 px-4 text-base text-dark-200 font-ubuntu font-light hover:bg-grey-170'
        onClick={() => {onChange(label); }}
        key={key}>
        {findIndexTerm(label)}
      </li>)
    }


    const getOptionsSearch = ( onChange:(label: string)=>void) => {
      const optionsSearch = filterOptionsToSelect(options, currentValue, 'label');
        return (
          <ul className={clsx((optionsSearch.length== 0 || (currentValue === optionsSearch[0]?.label && optionsSearch.length ===1)) &&'hidden', 'w-full max-h-48 z-10 border-t border-t-grey-160 border-x border-b border-primary-200 rounded-b-md bg-white absolute top-11 overflow-y-scroll scrollbar-custom')}>
            {optionsSearch.map(({ label }, index) => {  return findMatchingLabel(label, index, onChange)})}
          </ul>)
    }


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
          render={({ field: { name, value, ...res } }) => (
            <>
              <input
                id={name}
                value={value ?? ''}
                type='text'
                aria-describedby={`${descriptionId} ${errorId}`}
                className={clsx(
                  className,
                  error && errorInputClasses,
                  inputClasses,
                  focusInputClasses,
                  value?.length >= 1 && '!focus:border-t-primary-200'
                )}
                {...res}
                {...restOfProps}
              />
              <Suspense key={currentValue}>{getOptionsSearch(res.onChange)}</Suspense>
            </>
          )}
        />
      </FieldWrapper>
    );
  },
);

SearchField.displayName = 'SearchField';

