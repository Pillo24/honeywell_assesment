import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
display: block;
cursor: pointer;
width: 100%;
padding: 8px;
text-align: center;
border-radius: 0.375rem;
background-color: #0d6efd;
color: #fff;
line-height: 1.5;
border: 1px solid #0d6efd;
font-family: inherit;
`;

export interface FormButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
}

export const FormButton: FC<FormButtonProps> = ({
    children,
    ...rest
}) => {
    return (
        <ButtonWrapper {...rest}>
            {children}
        </ButtonWrapper>
    );
}