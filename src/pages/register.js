import './../css/login.css'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import isEmailValidator from 'validator/lib/isEmail';
import YupPassword from 'yup-password'
import Login from './login';

YupPassword(yup)

// Schema to validate the input data from the user.
const schema = yup.object({
    //Parameter for the username. (Only charaters)
    username: yup.string()
        .matches(/^[a-z]+$/,
            'Insert only normal character'
        )
        .required(),

    //Parameter for the email. (validate the correct email data)
    email: yup.string()
        .email("Invalid email format")
        .required("Mail is required")
        .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),

    //Parameter for the password. (no space password character and password parameters)
    password: yup.string()
        .min(8)
        .password()
        .matches(/^\S*$/, 'Whitespace is not allowed')
        .required(),

    //Parameter for the password. (no space password character, password parameters and check witht with the first password)
    password2: yup.string()
        .min(8)
        .password()
        .matches(/^\S*$/, 'Whitespace is not allowed')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
})
    .required()

export default function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })

    // Trigger to submite
    const onSubmit = ((data) => {
        // Hashing the password
        const hashpass = bcrypt.hashSync(data.password, 10);
        // data.password = hashpass;
    
        console.log(data);

        console.log("Password hashed: ", hashpass);
        navigateDashboad();
    })

    // Function to go login
    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/login');
    };

    // Function to go Dashboad after validation
    const navigateDashboad = () => {
        // 👇️ navigate to /
        navigate('/dashboard');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form2">
                <h3>Signup</h3>

                <label >Username</label>
                <input type="username" placeholder="username" {...register('username', { required: true, maxLength: 20 })}
                ></input>
                <p className="error">{errors.username?.message}</p>

                <label >Email</label>
                <input type="email" placeholder="email" {...register('email', { required: true })}
                ></input>
                <p className="error">{errors.email?.message}</p>

                <label >Password</label>
                <input type="password" id="p1" placeholder="password" {...register('password', { required: true })}
                ></input>
                <p className="error">{errors.password?.message}</p>

                <label >Repeat Password</label>
                <input type="password" id="p2" placeholder="repeat password" {...register('password2', { required: true })}
                ></input>
                <p className="error">{errors.password2?.message}</p>

                <button>Signup</button>
            </form>
            <div className='loginbt'>
                <button onClick={navigateLogin}>Login</button>
            </div>
        </div>
    )
}
