import React from 'react';

// Components
import Logo from '../logo';
import Button from '../button';

// Styles
import './header.scss';

export interface HeaderProps {
    logged: boolean;
}

const Header: React.FC<HeaderProps> = ({ logged }): JSX.Element => {
    return (
        <header className='header__container'>
            <div className='header__content'>
                <Logo />
                {logged ? (
                    <Button>Log Out</Button>
                ) : (
                    <div className='header__buttons'>
                        <Button>Log In</Button>
                        <Button styleType="standard">Sing Up</Button>
                    </div>
                )}
            </div>
        </header>
    )
};

export default Header;