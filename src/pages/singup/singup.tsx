import React, { useState } from 'react';
import Button from '../../components/button';
import Input from '../../controls/input';

// Styles
import './singup.scss';

export interface SingUpProps {
    logged: boolean;
}

const SingUp: React.FC = (): JSX.Element => {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validation, setValidation] = useState<string>('');

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const user = { userName, email, password };
        console.log('user:', user);
    }

    return (
        <div className='sing-up__container'>
            <form className='sing-up__form' onSubmit={handleSubmit}>
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    labelText='Username'
                    value={userName}
                    setValue={setUserName}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    labelText='Email'
                    value={email}
                    setValue={setEmail}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    type="password"
                    labelText='Password'
                    value={password}
                    setValue={setPassword}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    type="password"
                    labelText='Password Validation'
                    helper='Plase confirm password'
                    value={validation}
                    setValue={setValidation}
                />
                <Button>Sign Up</Button>
            </form>
        </div>
    )
};

export default SingUp;