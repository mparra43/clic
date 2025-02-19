'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { Form } from '@/interfaces';
import { Button } from '@/components/transversal/shared';
import { InputSelection } from './inputSelection';
import { useContactForm } from '@/hooks';

interface ContactFormProps extends Form {
    className?: string;
    classNameLogo?: string;
    companyId?: string;
    companyLogo?: string;
    // onSuccess: (data: any) => void;
    resetForm: boolean;
  }

export const ContactForm = ({
    button,
    className,
    classNameLogo = 'w-44 h-14 mx-auto mb-8',
    companyLogo,
    companyId,
    inputs,
    paragraph,
    paragraphStyles = 'my-4 text-md lg:text-lg text-left text-grey-300',
    title,
    titleStyles = 'text-[1.563rem] lg:text-4xl/2 text-center',
    // onSuccess,
    resetForm,
}: ContactFormProps) => {
    const {
        control,
        errors,
        dirtyFields,
        isValid,
        handleSubmit,
        // handleSuccess,
        watch,
        show,
        register,
        handleShowInput,
    } = useContactForm( resetForm);

    const handleSuccess = (data: any) => {
        console.log('Formulario enviado con éxito:', data);
      };

    return (
        <div className={clsx('w-10/12', className)} data-testid='contactForm'>
            {companyLogo && companyId && (
                <Image alt='companyLog' className={classNameLogo} src={`${companyLogo}${companyId}.gif`} width={100} height={100} />
            )}

            {title && <h1 className={clsx(titleStyles, 'font-kreon font-bold mb-1 leading-7')}>{title}</h1>}
            {paragraph && <p className={clsx(paragraphStyles, 'font-normal font-ubuntu')}>{paragraph}</p>}

            <form onSubmit={handleSubmit(handleSuccess)} data-testid='form'>
                {inputs?.map((input, index) => (
                    <InputSelection key={index} {...{ control, dirtyFields, errors, handleShowInput, ...input, register, show, watch }} />
                ))}

            
                {button?.label && (
                    <Button className={clsx(button.style, (!isValid ? button.disabled : button.active))} data-testid='button-submit' label={button.label} type='submit' />
                )}
            </form>
        </div>
    );
};