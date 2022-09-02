import React, {
    ComponentProps,
    DetailedHTMLProps,
    FC,
    InputHTMLAttributes,
    useMemo,
} from 'react';


import { UseFormSetValue } from "react-hook-form"; 

// Components
import classNames from 'classnames';

// Styles
import './input.scss';

export interface InputProps
extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    fieldName?: string;
    setValue?: UseFormSetValue<any>,
    required?: boolean;
    labelText?: string;
    width?: 'small' | 'medium' | 'large' | 'auto';
    isError?: boolean;
    error?: string;
    helper?: string;
    minLength?: number;
    maxLength?: number;
    fieldClassName?: string;
    labelProps?: ComponentProps<'label'>
}

const Input: FC<InputProps> = ({
    fieldName,
    setValue,
    className,
    labelText,
    type = 'text',
    required,
    width = 'medium',
    isError = false,
    error,
    helper,
    minLength,
    maxLength,
    fieldClassName,
    ...otherProps
}) => {
    const fieldContainerClassName = useMemo(
        () =>
        classNames(
            'input__container',
            {
            ['input__size-' + width]: width,
            },
            fieldClassName,
        ),
        [fieldClassName, width],
    );

    const inputClassNames = useMemo(
        () =>
        classNames(
            'input',
            {
            'input_error': isError,
            'input__is-required': required,
            },
            className,
        ),
        [className, required, isError],
    );

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        if (setValue) setValue(fieldName || '', e.target.value)
    }
    
    return (
        <div className={fieldContainerClassName}>
            {labelText && (
                <div className="field__label">
                    <label
                        className="field__label-text"
                    >
                        {labelText}
                    </label>
                    {required && (
                        <div className="field__label-required-text">*</div>
                    )}
                </div>
            )}
            <input
                id={fieldName}
                name={fieldName}
                className={inputClassNames}
                required={required}
                aria-label={labelText}
                type={type}
                onChange={handleChange}
            />
            {helper && <div className="field__feedback">{helper}</div>}
            {isError && (
                <div className="field__feedback field__feedback--has-error">
                    {error}
                </div>
            )}
        </div>
    )
};

export default Input;