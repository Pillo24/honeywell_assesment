import { useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthContext'

export const useUserAuthContext = () => {
    const context = useContext(UserAuthContext)

    return context
}
