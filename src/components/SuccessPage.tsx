import React, { FC } from 'react';
import styled from 'styled-components';

export interface SuccessPageProps {
    children: React.ReactNode;
}

const SuccessPageWrapper = styled.div`
display: block;
width: 50%;
box-sizing: border-box;
padding: 24px;
border-radius: 12px;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const SuccessPage: FC<SuccessPageProps> = ({children}) => {
    return (
        <SuccessPageWrapper>
            <h1>You have been registered!</h1>
            {children}
        </SuccessPageWrapper>
    );
}