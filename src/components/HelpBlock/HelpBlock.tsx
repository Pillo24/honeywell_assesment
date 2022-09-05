import React, { FC, HTMLAttributes, useState, useRef } from 'react';
import styled from 'styled-components';
import { AiFillInfoCircle } from 'react-icons/ai';

const HelpBlockWrapper = styled.div`
display: inline-block;
position: relative;
`;

const HelpBlockContent = styled.div`
position: absolute;
min-width: 200px;
background: #fff;
top: 20px;
left: 0;
transform: translate(-50%, 0);
border: solid #dee2e6;
border-radius: 4px;
padding: 8px;
`;

const HelpBlockButton = styled.button`
background: transparent;
border: none;
cursor: pointer;
`;

export interface HelpBlockProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
}

export const HelpBlock: FC<HelpBlockProps> = ({
    children,
    id,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const toggle = () => {
       setIsOpen((opened) => !opened);
    }

    return (
        <HelpBlockWrapper ref={wrapperRef} {...rest}>
            <HelpBlockButton type="button" aria-label="Get help" onClick={toggle}>
                <AiFillInfoCircle size={20} />
            </HelpBlockButton>
            {isOpen && (
                <HelpBlockContent>
                    {children}
                </HelpBlockContent>
            )}
        </HelpBlockWrapper>
    );
}