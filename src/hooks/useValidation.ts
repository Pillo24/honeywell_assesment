import React, { useState, useCallback } from 'react';
import { ObjectSchema } from 'joi';
import { SignupErrorMessages } from '../schemas/Signup.schema';

export interface UseValidationProps {
    schema: ObjectSchema;
    fieldName: string;
}

export interface UserValidationResult {
    isInvalid: boolean;
    onChange: React.FormEventHandler<HTMLInputElement>;
    value: string;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    validationMessage: string;
}

export type UseValidationShape = (props: UseValidationProps) => UserValidationResult;

export const useValidation: UseValidationShape = ({
    schema,
    fieldName,
}) => {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");

    const validate = useCallback(() => {
        const result = schema.validate({ [fieldName]: value }, { abortEarly: false });

        const message = result.error?.details.find((details) => details.path.includes(fieldName));

        setValidationMessage(
            SignupErrorMessages
                [fieldName]
                [message?.context?.name || message?.type || ''] || ''
        );

        console.log(result);

        setIsInvalid(!!message?.message);
    }, [fieldName, value, schema]);

    const onChange = useCallback<React.FormEventHandler<HTMLInputElement>>((evt) => {
        setValue((evt.target as HTMLInputElement).value);
    }, []);

    const onBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
        validate();
    }, [validate]);

    return { isInvalid, onBlur, onChange, value, validationMessage };
}