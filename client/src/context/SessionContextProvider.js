/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';


export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const [session, setSession] = useState({
    isAuthentificated: false,
    isLoading: true,
    user: {
      id: '',
      name: '',
      email: '',
      photo: '',
    },
  });
  const history = useHistory();


  const startSession = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = await authService.checkToken(token);
      if (user) {
        setSession({
          isAuthentificated: true,
          isLoading: false,
          user,
        });
        history.push('/app');
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    startSession();
  }, []);


  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
