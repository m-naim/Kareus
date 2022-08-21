import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import authService from 'services/authService';

const PrivateRoute = ({token, ...props}) => {
    const location = useLocation();
    const user = authService.getCurrentUser();
    return user? <Outlet />:
        (<Navigate to={`/login/${location.search}`} replace state={{ location }} />);
};

export default PrivateRoute;