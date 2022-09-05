import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useValidation } from "../hooks/useValidation";
import { signupSchema as schema } from "../schemas/Signup.schema";
import { FormInput } from "./FormInput/FormInput";

const SignupFormWrapper = styled.form`
display: block;
width: 50%;
box-sizing: border-box;
padding: 24px;
border-radius: 12px;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const SignupForm: FC = () => {
    const {
        isInvalid: isUsernameInvalid,
        onBlur: onUsernameBlur,
        onChange: onUsernameChange,
        value: username,
        validationMessage: usernameMessage,
        validate: validateUsername
    } = useValidation({ schema, fieldName: 'username' });

    const {
        isInvalid: isEmailInvalid,
        onBlur: onEmailBlur,
        onChange: onEmailChange,
        value: email,
        validationMessage: emailMessage,
        validate: validateEmail
    } = useValidation({ schema, fieldName: 'email' });

    const {
        isInvalid: isPasswordInvalid,
        onBlur: onPasswordBlur,
        onChange: onPasswordChange,
        value: password,
        validationMessage: passwordMessage,
        validate: validatePassword
    } = useValidation({ schema, fieldName: 'password' });

    const {
        isInvalid: isRepeatPasswordInvalid,
        onBlur: onRepeatPasswordBlur,
        onChange: onRepeatPasswordChange,
        value: repeatPassword,
        validationMessage: repeatPasswordMessage,
        validate: validateRepeatPassword
    } = useValidation({ schema, fieldName: 'repeatPassword' });

    const submit = useCallback<React.FormEventHandler<HTMLFormElement>>((evt) => {
        const validate = validateEmail()
            && validateUsername()
            && validatePassword()
            && validateRepeatPassword();

            if (!validate) evt.preventDefault();
    }, [validateEmail, validatePassword, validateUsername, validateRepeatPassword]);

    return (
        <SignupFormWrapper action="#" onSubmit={submit}>
            <FormInput
                id="username"
                isInvalid={isUsernameInvalid}
                label="User name"
                validationMessage={usernameMessage}
                value={username}
                onChange={onUsernameChange}
                onBlur={onUsernameBlur}
                type="text"
            >
                Your username will be used across the application,
                choose wisely!
                Username should contain only alphanumeric characters
            </FormInput>
            <FormInput
                id="email"
                isInvalid={isEmailInvalid}
                label="Email address"
                validationMessage={emailMessage}
                value={email}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
                type="email"
            >
                Please provide a valid email address, it should include
                an "@" symbol and at least one valid domain.
            </FormInput>
            <FormInput
                id="password"
                isInvalid={isPasswordInvalid}
                label="Password"
                validationMessage={passwordMessage}
                value={password}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                type="password"
            >
                <>
                    Your password should contain:
                    <ul>
                        <li>At least 8 characters</li>
                        <li>One uppercase character</li>
                        <li>One lowercase character</li>
                        <li>One digit</li>
                        <li>One special character (!, _, -, +)</li>
                        <li>No sequenced characters</li>
                    </ul>
                </>
            </FormInput>
            <FormInput
                id="repeat_password"
                isInvalid={isRepeatPasswordInvalid}
                label="Repeat password"
                validationMessage={repeatPasswordMessage}
                value={repeatPassword}
                onChange={onRepeatPasswordChange}
                onBlur={onRepeatPasswordBlur}
                type="password"
            >
                Repeat password should be the same as password field
            </FormInput>
            <button type="submit">Sign up!</button>
        </SignupFormWrapper>
    );
};
