import React, {createContext, useState, ReactNode} from 'react';
import {AxiosResponse} from 'axios';
import api from '../services/api';

const AuthContext = createContext<AuthContextDataType>(
  {} as AuthContextDataType,
);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextDataType {
  isAuthenticated: boolean;
  user: UserType | null;
  token: string | null;
  signIn: (data: SignInData) => Promise<AxiosResponse<SignInResponse>>;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: {
    plain_text_token: string;
    user: UserType;
    created_at: string;
    updated_at: string;
  };
}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  async function signIn(data: SignInData) {
    try {
      const response = await api.post<SignInResponse>('/sign-in', data);

      if (response.status == 200 || response.status == 201) {
        saveSignIn(response);
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function saveSignIn(response: AxiosResponse<SignInResponse>) {
    const {plain_text_token, user} = response.data.data;

    setUser(user);
    setToken(plain_text_token);

    api.defaults.headers.common['Authorization'] = `Bearer ${plain_text_token}`;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        token,
        isAuthenticated: token ? true : false,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
