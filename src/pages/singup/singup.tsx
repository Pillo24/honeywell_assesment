import React, { useState } from 'react';
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import Button from '../../components/button';
import Input from '../../controls/input';

// Schema
import { singUpSchema } from "../../schemas/singupSchema";

// Styles
import './singup.scss';

export interface SingUpProps {
    logged: boolean;
}

export type SignupForm = {
    userName: string;
    email: string;
    password: string;
    validation: string;
};

const SingUp: React.FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupForm>({
        resolver: yupResolver(singUpSchema),
    });

    console.log('errors: ', errors)

    const onSubmit = (user: SignupForm): void => {
        console.log('new user:', user);
    }

    return (
        <div className='sing-up__container'>
            <form className='sing-up__form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    labelText='Username'
                    isError={!!errors?.userName}
                    error={errors?.userName?.message || ''}
                    {...register('userName')}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    labelText='Email'
                    isError={!!errors?.email}
                    error={errors?.email?.message || ''}
                    {...register('email')}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    type="password"
                    labelText='Password'
                    isError={!!errors?.password}
                    error={errors?.password?.message || ''}
                    {...register('password')}
                />
                <Input
                    fieldClassName="sing-up__form-field"
                    required
                    type="password"
                    labelText='Password Validation'
                    helper='Plase confirm password'
                    isError={!!errors?.validation}
                    error={errors?.validation?.message || ''}
                    {...register('validation')}
                />
                <Button>Sign Up</Button>
            </form>
        </div>
    )
};

export default SingUp;