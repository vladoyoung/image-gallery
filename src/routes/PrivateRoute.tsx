import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { RouteProps } from '../types/index'

const PrivateRoute: FC<RouteProps> = ({ children }) => {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/login" replace={true}/>
    }

    return children
};

export default PrivateRoute