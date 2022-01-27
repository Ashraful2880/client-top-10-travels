import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <p>Loading....</p>
    } else {
        if (user) {
            return children
        } else {
            return <Navigate to='/signin' state={{ from: location }} />
        }
    }
};

export default PrivateRoute