import react from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import React, { createContext, useState } from 'react';
import api from '../services/api';

interface AuthProps {
  user: any;
  signUp(): any;
  signed: boolean;
  token: string;
  isLogged: boolean;
  login(): any
}

interface SignUpRequestProps {
  email: string;
  password: string;
  userType: string;
  name: string;
}
interface LoginRequestProps {
  email: string;
  password: string;
}

const AuthContext = createContext({} as AuthProps);

const signUpRequest = async function ({
  email,
  password,
  name,
}: SignUpRequestProps) {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: '/signup',
    headers: { auth: 'BrazilCorreios' },
    data: {
      email,
      password,
      userType: 'consumer',
      name,
    },
  };
  const { data } = await api.request(options);
  console.log(data);
  return {
    id: await data.id,
    isLogged: true,
    name: await data.data.name,
    userType: await data.data.userType,
    email: await data.data.email,
  };
};

async function loginRequest({ email, password }: LoginRequestProps) {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: '/login',
    data: {
      email,
      password,
    },
  };
  const { data: any } = await api.request(options);

  return(
    user: data,
    token: data.token
  )
}

export const AuthProvider: React.FC = ({ children }: any) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({});


  async function signUp({ email, password, name }) {
    console.log('chegou');
    const response = await signUpRequest({
      email,
      password,
      name,
      userType: 'consumer',
    } as SignUpRequestProps);
    setUser(await response);
    console.log(response);

    console.log('logged: ' + signed);
  }

  async function login({email, password}){
    const response = await loginRequest({email, password} as LoginRequestProps)
    setUser(await response);
    console.log(response);
    setSigned(true);
  }


  return (
    <AuthContext.Provider value={{ signed, user, signUp, login } as AuthProps}>
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext } from 'react';

export default AuthContext;
