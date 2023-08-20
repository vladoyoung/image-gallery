import { createContext, FC, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config';
import { RouteProps } from '../types/index';

// create context
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
});

export const AuthProvider: FC<RouteProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });
        // unsubscribe to the listener when unmounting
        return unsubscribe;
    }, []);

    const value = {
        user,
        isLoading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}
