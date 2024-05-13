import React, { createContext, useState, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import Toast from  '../utils/toastUtils';
import { buildFormDataSignUp } from '../utils/authUtils';


export const AuthContext = createContext({});

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider = ({ children }: AuthProviderProps) => {

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
    async function saveSignIn(response) {
        const { token, user } = response.data;
    
        const plainTextToken = token.plainTextToken;
    
        setUser(user);
        setToken(plainTextToken);
    
        await AsyncStorage.setItem('@cm:token', plainTextToken);
        await AsyncStorage.setItem('@cm:user', user.id.toString());
    
        api.defaults.headers.common['Authorization'] = `Bearer ${plainTextToken}`;
      }
    
    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}