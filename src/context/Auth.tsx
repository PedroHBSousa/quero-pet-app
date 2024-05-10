import React, { createContext, useState } from 'react';
import api from '../services/api';
import Toast from  '../utils/toastUtils';
import { buildFormDataSignUp } from '../utils/authUtils';

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextValue {
    signIn: (data: SignInData) => Promise<ApiResponse>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    async function signIn(data) {
        try {
            const response = await api.post('/login', data);

            if (response.status === 200) {
                saveSignIn(response);
            }

            return response;
        } catch (error) {
            showMessageError(error);

            throw error;
        }
    }

    function showMessageError(error) {
        const { message } = error.response.data;

        if (message) {
            Toast.show(message);
        } else {
            Toast.show('Problemas de conexão com o servidor.');
        }
    }
    
    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}