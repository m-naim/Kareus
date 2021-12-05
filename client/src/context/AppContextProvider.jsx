/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  createContext, useContext, useReducer, useEffect, useCallback,
} from 'react';
import reducer from './reducer';
import initialState from './initialState';
import stateService from '../services/stateService';
import { useSessionContext } from './SessionContextProvider';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [session] = useSessionContext();

  const fetchAPI = useCallback(async () => {
    try {
      const data = await stateService.getState(session.user.id);
      console.log(data);
      dispatch({
        type: 'UPDATE',
        payload: data,
      });
    } catch (error) {
      const newState = { ...initialState, userId: session.user.id };
      dispatch({
        type: 'UPDATE',
        payload: newState,
      });
      stateService.postState(newState);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    stateService.updateState(state);
  }, [state]);


  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextValue = () => useContext(AppContext);
