import { useState, useEffect  } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ShowInputPassword } from '@/interfaces';
import {  TypeInput } from '@/enum';

export const useContactForm = ( resetForm: boolean) => {


    const { control, formState, handleSubmit, register, reset, watch, getValues } = useForm({});
    const { errors, dirtyFields, isValid } = formState;

    const [show, setShow] = useState<ShowInputPassword>({ password: false, passwordConfirmation: false });

    const handleSuccess: SubmitHandler<any> = async (data) => {
        // onSuccess({ ...data });
        reset();
    };

    useEffect(() => {
        if (resetForm) reset();
    }, [resetForm, reset]);

    const handleShowInput = (key: TypeInput, value: boolean) => {
        setShow((prev) => ({ ...prev, [key]: value }));
    };

    return {
        control,
        errors,
        dirtyFields,
        isValid,
        handleSubmit,
        handleSuccess,
        register,
        watch,
        getValues,
        show,
        handleShowInput,
    };
};