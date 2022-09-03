import { useReducer, createContext, useEffect } from 'react'

// export interface UserAuthContextProps {
//     name: string
//     email: string
//     token: string
// }

// TODO: add interfaces

export const UserAuthContext = createContext<any | null>(null)

export const userAuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }

        default:
            return state
    }
}

export const UserAuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(userAuthReducer, {
        user: null,
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')!)

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    return (
        <UserAuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserAuthContext.Provider>
    )
}
