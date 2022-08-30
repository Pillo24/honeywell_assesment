import {
    ComponentProps,
    DetailedHTMLProps,
    Dispatch,
    FC,
    InputHTMLAttributes,
    SetStateAction,
    useMemo,
} from 'react';

// Components
import classNames from 'classnames';

// Types
import { RegisterOptions } from 'react-hook-form';  

// Styles
import './input.scss';

export interface InputProps
extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    value?: string;
    setValue?: Dispatch<SetStateAction<string>>;
    required?: boolean;
    labelText?: string;
    width?: 'small' | 'medium' | 'large' | 'auto';
    isError?: boolean;
    helper?: string;
    minLength?: number;
    maxLength?: number;
    rules?: RegisterOptions;
    fieldClassName?: string;
    labelProps?: ComponentProps<'label'>
}

const Input: FC<InputProps> = ({
    value,
    setValue,
    className,
    labelText,
    type = 'text',
    required,
    width = 'medium',
    isError = false,
    helper,
    minLength,
    maxLength,
    rules,
    fieldClassName,
    labelProps,
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (setValue) setValue(e.target.value);
    }

    return (
        <div className={fieldContainerClassName}>
            {labelText && (
                <div className="field__label">
                    <label
                        className="field__label-text"
                        {...labelProps}
                    >
                        {labelText}
                    </label>
                    {required && (
                        <div className="field__label-required-text">*</div>
                    )}
                </div>
            )}
            <input
                {...otherProps}
                className={inputClassNames}
                required={required}
                aria-required={required}
                aria-label={labelText}
                type={type}
                value={value}
                onChange={handleChange}
            />
            {helper && <div className="field__feedback">{helper}</div>}
            {isError && (
                <div className="field__feedback field__feedback--has-error">
                    Please complete the field
                </div>
            )}
        </div>
    )
};

export default Input;