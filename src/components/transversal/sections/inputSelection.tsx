import clsx from 'clsx';
import Link from 'next/link';
import { Field, TypeInput } from '@/enum';
import { InputField, NumericField, SelectField, TextAreaField, SearchField, PatternField, CheckboxField } from '@/components/transversal/forms';
import { Input, ShowInputPassword } from '@/interfaces';
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';


interface InputSelectionProps extends Input {
    control: Control<any>;
    errors: FieldErrors<FieldValues>;
    show: ShowInputPassword;
    register: UseFormRegister<FieldValues>;
    handleShowInput: (key: TypeInput, value: boolean) => void
}

export const InputSelection = ({ control, errors, field, handleShowInput, label, labelProps, name, options, placeholder, register, rules, show, type, }: InputSelectionProps) => {

    const error = errors[name];

    switch (field) {
        case Field.INPUTFIELD:
            return type === TypeInput.PASSWORD ? (
                <div className='relative w-full'>
                    <InputField
                        label={label}
                        name={name}
                        control={control}
                        rules={rules}
                        error={error}
                        placeholder={placeholder}
                        labelProps={{ className: 'font-medium text-base' }}
                        type={show[type] ? 'text' : 'password'} />
                    <i className={`eye${show[type] ? '' : '-slash'} absolute right-4 top-9 opacity-25`} onClick={() => handleShowInput(type, !show[type])} />
                </div>
            ) : (
                <InputField
                    name={name}
                    control={control}
                    error={errors[name]}
                    label={label}
                    labelProps={{ className: 'font-medium text-base' }}
                    placeholder={placeholder}
                />
            );

        case Field.NUMERICFIELD:
            return <NumericField
                name={name}
                control={control}
                rules={rules}
                error={error}
                placeholder={placeholder}
                label={label}
                labelProps={{ className: 'font-medium text-base' }}
            />;

        case Field.SELECTFIELD:
            return <SelectField name={name} control={control} rules={rules} error={error} placeholder={placeholder} options={options || []} />;

        case Field.TEXTAREAFIELD:
            return <TextAreaField
                name={name}
                control={control}
                rules={rules}
                error={error}
                placeholder={placeholder}
                label={label}
                labelProps={{ className: 'font-medium text-base' }}
            />;



        case Field.CHECKBOXFIELD:
            const checkboxLabel = Array.isArray(label) ? (
                <p className={labelProps?.className}>
                    {' '}
                    {label.map(({ text, link }, index) => {
                        return link ? (
                            <Link
                                key={index}
                                className='!text-sky-600 text-[12.5px] 2xl:text-sm'
                                href='/'
                            >
                                {text}
                            </Link>
                        ) : (
                            text
                        );
                    })}{' '}
                </p>
            ) : (
                label
            );

            return (
                <CheckboxField
                    label={checkboxLabel}
                    labelPosition='right'
                    wrapperClassName='mb-4'
                    labelProps={{
                        className: clsx(
                            'checkbook-container',
                            '!text-grey-300 text-[12.5px] font-medium 2xl:text-sm leading-4 ',
                        ),
                    }}
                    error={errors[name]}
                    placeholder={placeholder}
                    {...register(name, { required: rules.required })}
                />
            );

        default:
            return null;
    }
};