import react from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import React, { createContext, useState } from 'react';
import Api from '../services/api';

interface AuthProps {
  user: any;
  signUp(): any;
  signed: boolean;
  token: string;
  isLogged: boolean;
  login(): any;
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
  const { data } = await Api.request(options);
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
  const options = {
    method: 'POST',
    url: 'https://api-correios-sousadev.herokuapp.com/login',

    data: {
      email,
      password,
    },
  };

  await axios
    .request(options)
    .then(async ({ data }) => {
      // console.log(data);
      return await data;
    })
    .catch(async (err) => console.log(err));
  // return;
}

export const AuthProvider: React.FC = ({ children }: any) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({});

  async function signUp({ email, password, name }: SignUpRequestProps) {
    console.log('chegou');
    const response = await signUpRequest({
      email,
      password,
      name,
      userType: 'consumer',
    } as SignUpRequestProps);
    setUser(await response);
    // console.log(response);

    console.log('logged: ' + signed);
  }

  async function login({ email, password }: LoginRequestProps) {
    const options = {
      method: 'POST',
      url: 'https://api-correios-sousadev.herokuapp.com/login',

      data: {
        email,
        password,
      },
    };

    const response = await axios
      .request(options)
      .then(async ({ data }) => {
        return await data;
      })
      .catch(async (err) => console.log(err));

    setUser(await response);
    setTimeout(() => {
      setSigned(true);
      console.log(response);
    }, 2000);
  }

  return (
    <AuthContext.Provider value={{ signed, user, signUp, login } as AuthProps}>
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext } from 'react';

export default AuthContext;
