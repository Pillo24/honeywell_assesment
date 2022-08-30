import {
    ComponentProps,
    DetailedHTMLProps,
    FC,
    InputHTMLAttributes,
    useMemo,
} from 'react';

// Components
import classNames from 'classnames';

// Styles
import './input.scss';

export interface InputProps
extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
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
                className={inputClassNames}
                required={required}
                aria-label={labelText}
                type={type}
                {...otherProps}
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