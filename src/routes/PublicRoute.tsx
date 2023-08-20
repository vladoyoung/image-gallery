import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { RouteProps } from '../types/index'

const PublicRoute: FC<RouteProps> = ({ children }) => {
    const { user } = useAuth()

    if (user) {
        return <Navigate to="/" replace={true}/>
    }

    return children
};

export default PublicRoute