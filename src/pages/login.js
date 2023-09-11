import './../css/login.css'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';

export default function Login() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = handleSubmit((data) => {
        const hashpass = bcrypt.hashSync(data.password, 10);
        data.password = hashpass;
        console.log(data);

        if (!isValidEmail(data.email)) {
            setError('Email is invalid');
            console.log("Fail email");
        }
        else {
            setError(null);
        }
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Login</h3>
                <label >Email</label>
                {/* <input type="email" placeholder="email" {...register('email', { required: true})}></input> */}
                <input
                    id="email"
                    {...register("email", {
                        required: "Email is required",
                        validate: {
                            maxLength: (v) =>
                                v.length <= 20 || "The email should have at most 20 characters",
                            matchPattern: (v) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                "Email address must be a valid address",
                        },
                    })}
                />
                {errors.email?.message && (
                    <small style={{ color: "red" }}>{errors.email.message} </small>
                )}

                <label >Password</label>
                <input type="password" placeholder="Password" {...register('password', { required: true, maxLength: 30 })}></input>

                <button>Log In</button>
            </form>
        </div>
    )
}

