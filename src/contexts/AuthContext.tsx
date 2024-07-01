import React, {createContext, useState, ReactNode} from 'react';
import {AxiosResponse} from 'axios';
import api from '../services/api';
import {buildFormDataSignUp} from '../utils/authUtils';
import {SubmitSignUpValues} from '../screens/SignUpScreen';
import {SubmitSignUpAddressValues} from '../screens/SignUpAddressScreen';
import {SubmitSignUpPhotoValues} from '../screens/SignUpPhotoScreen';
import {UserType} from '../interfaces';

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
  signUp: (data: SignUpData) => Promise<AxiosResponse<SignUpResponse>>;
}

interface SignInData {
  email: string;
  password: string;
}

export type SignUpData = SubmitSignUpValues &
  SubmitSignUpAddressValues &
  SubmitSignUpPhotoValues;

interface SignInResponse {
  data: {
    plain_text_token: string;
    user: UserType;
    created_at: string;
    updated_at: string;
  };
}

interface SignUpResponse {
  data: UserType;
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

  async function signUp(data: SignUpData) {
    try {
      const formData = buildFormDataSignUp(data);

      const response = await api.post('/adopters', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        user,
        token,
        isAuthenticated: token ? true : false,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
