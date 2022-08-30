import React from 'react';

// Styles
import './singup.scss';

export interface SingUpProps {
    logged: boolean;
}

const SingUp: React.FC = (): JSX.Element => {
    return (
        <div className='sing-up__container'>
            Hello
        </div>
    )
};

export default SingUp;