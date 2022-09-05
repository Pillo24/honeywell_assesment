import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { HelpBlock } from "../HelpBlock/HelpBlock";

export interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    id: string;
    validationMessage?: string;
    isInvalid?: boolean;
    type: string;
}

type FormInputInputProps = Pick<FormInputProps, "isInvalid">;

const FormInputWrapper = styled.div`
display: grid;
grid-template-columns: min-max(1fr, 1fr);
margin-bottom: 8px;
`;

const FormInputLabel = styled.label`
margin-bottom: 4px;
`;

const FormInputFeedback = styled.div`
color: #842029;
`;

const FormInputInput = styled.input<FormInputInputProps>`
box-sizing: border-box;
display: block;
width: 100%;
padding: 0.375rem 0.75rem;
margin-bottom: 8px;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border-radius: 0.375rem;
${({isInvalid}) => isInvalid ? (
    `border: 1px solid #842029;`
) : (
    `border: 1px solid #ced4da;`
)}
`;

const FormInputRow = styled.div`
display: grid;
grid-template-columns: 1fr auto;
grid-gap: 4px;
`;

export const FormInput: FC<FormInputProps> = ({
    label,
    validationMessage,
    isInvalid = true,
    value,
    onChange,
    children,
    id,
    ...rest
}) => {
    const errorId = `error-${id}`;
    const helpId = `help-${id}`;
    return (
        <FormInputWrapper>
            <FormInputRow>
                <FormInputLabel htmlFor={id}>{label}</FormInputLabel>
                <HelpBlock id={helpId}>{children}</HelpBlock>
            </FormInputRow>
            <FormInputInput
                id={id}
                value={value}
                onChange={onChange}
                {...rest}
                isInvalid={isInvalid}
                aria-invalid={isInvalid}
                aria-errormessage={errorId}
                aria-describedby={helpId}
            />
            {
                isInvalid && (
                    <FormInputFeedback id={errorId} aria-live="polite">
                        <div>
                            {validationMessage}
                        </div>
                    </FormInputFeedback>
                )
            }
        </FormInputWrapper>
    );
}