import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'notAuthenticated' = 'not-authenticated'
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;

    isChecking: boolean;
    isAuthenticated: boolean;

    // Methods
    loginWithEmailPassword: ( email: string, password: string ) => void;
    logout: () => void;
}

interface User {
    password: string;
    email: string;
    name: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState( AuthStatus.checking );
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setStatus( AuthStatus.notAuthenticated );
        }, 1500);
    }, []);

    const loginWithEmailPassword = ( email: string, password: string ) => {
        setUser({
            email: email,
            password: password,
            name: 'Andres Alvarez'
        });
        setStatus( AuthStatus.authenticated );
    }

    const logout = () => {
        setUser(undefined);
        setStatus( AuthStatus.notAuthenticated );
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,

            // Getter
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,

            // Methods
            loginWithEmailPassword,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}