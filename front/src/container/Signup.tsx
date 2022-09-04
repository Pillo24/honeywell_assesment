import { useState, SyntheticEvent, useEffect } from 'react'
import FormControl from '../components/FormControl'
import { useComparePasswords } from '../hooks/useComparePasswords'
import { useSignup } from '../hooks/useSignup'
import { useValidEmail } from '../hooks/useValidEmail'
import { useValidName } from '../hooks/useValidName'
import { useValidPassword } from '../hooks/useValidPassword'

const Signup = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfrimPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    //custom Hooks
    const { signup, error } = useSignup()
    const { errMsgPass, handlePasswordValidation } = useValidPassword()
    const { isValidEmail, errMesgEmail, handlEmailValidation } = useValidEmail()
    const { isValidName, errMesgName, handlNameValidation } = useValidName()
    const { areValidPasswords, handlComparePasswords, errMesgPasswords } =
        useComparePasswords()

    useEffect(() => {
        name !== '' && handlNameValidation(name)
        email !== '' && handlEmailValidation(email)
        password !== '' && handlePasswordValidation(password)
    }, [
        email,
        password,
        name,
        handlNameValidation,
        handlEmailValidation,
        handlePasswordValidation,
    ])

    useEffect(() => {
        handlComparePasswords(password, confirmPassword)
    }, [password, confirmPassword, handlComparePasswords])

    //handle the value of the inputs
    const handleNameChange = (value: string) => setName(value)
    const handleEmailChange = (value: string) => setEmail(value)
    const handlePasswordChange = (value: string) => setPassword(value)
    const handleConfirmPasswordChange = (value: string) =>
        setConfrimPassword(value)

    const handleSubmmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (isValidName && isValidEmail && areValidPasswords) {
            await signup(name, email, password)
        }
    }
    return (
        <div>
            <form action="" className="signup" onSubmit={handleSubmmit}>
                <h3>Sign up</h3>
                <FormControl
                    lableTitle={'Name'}
                    value={name}
                    onChange={handleNameChange}
                    errMessage={errMesgName}
                />
                <FormControl
                    lableTitle={'Email'}
                    value={email}
                    onChange={handleEmailChange}
                    errMessage={errMesgEmail}
                />
                <FormControl
                    lableTitle={'Password'}
                    value={password}
                    onChange={handlePasswordChange}
                    errMessage={errMsgPass}
                />
                <FormControl
                    lableTitle={'Confirm Password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    errMessage={errMesgPasswords}
                />

                <button>Sign Up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Signup
