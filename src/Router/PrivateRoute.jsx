import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = () => {
        const token = sessionStorage.getItem('atoken');
        return !!token;
    };

    return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired, // Ensure component is a function or class component
};

export default PrivateRoute;
