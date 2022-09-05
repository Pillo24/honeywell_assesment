import Joi from "joi";

export type SignupErrors = {[key: string]: {[key: string]: string | undefined}}

export const SignupErrorMessages: SignupErrors = {
    username: {
        'any.required': "Username is required",
        'string.empty': "Username is required",
        'string.alphanum': "Username should contain only alpha numeric characters"
    },
    email: {
        'any.required': "Email address is required",
        'string.empty': "Email address is required",
        'string.email': "Please provide a valid email address, it should include an '@' symbol and at least one valid domain."
    },
    password: {
        'any.required': "Password is required",
        'string.empty': "Password is required",
        'sequential.digits': "Password should not contain any sequential digits",
        'sequential.chars': "Password should not contain any sequential characters",
        'min-length': "Password must have at least 8 characters",
        lowercase: "Password must have at least one lowercase character",
        uppercase: "Password must have at least one uppercase character",
        digits: "Password must have at least one digit",
        'special-characters': 'Password must have at least one special character (!, _, -, +)'
    },
    repeatPassword: {
        'any.only': "Passwords should be the same"
    }
};

export const signupSchema = Joi.object({
    username: Joi.string()
        .required()
        .alphanum(),
    email: Joi.string()
        .required()
        .email({ minDomainSegments: 1, tlds: { allow: false } }),
    password: Joi.string()
        .required()
        .regex(/.{8,}/, 'min-length')
        .regex(/[a-z]+/, 'lowercase')
        .regex(/[A-Z]+/, 'uppercase')
        .regex(/[0-9]+/, 'digits')
        .regex(/[!_\-+]/, 'special-characters')
        .custom((value: string, helper) => {
            for (let i = 0; i < value.length; i++) {
                const next = +value[i] + 1;
                const next2 = +value[i] + 2;

                if (next === +value[i + 1] && next2 === +value[i + 2]) {
                    return helper.error("sequential.digits");
                }

                const nextChar = String.fromCharCode(value.charCodeAt(i) + 1);
                const nextChar2 = String.fromCharCode(value.charCodeAt(i) + 2);

                if (nextChar === value[i + 1] && nextChar2 === value[i + 2]) {
                    return helper.error("sequential.chars");
                }
            }
            return value;
        }, "Non sequential characters"),
    repeatPassword: Joi.ref("password")
});
