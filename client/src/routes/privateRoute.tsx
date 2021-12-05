import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSessionContext } from '../context/SessionContextProvider';

const PrivateRoute = ({ children }: any) => {
  const [session] = useSessionContext();


  return (
    <Route
      render={({ location }) => {
        if (session.isLoading) return <CircularProgress />;
        if (session.isAuthentificated) return children;
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
