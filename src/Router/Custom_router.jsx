import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute.jsx';

export function createRouter({ basename = '', routes = [], catchAllRoute = null, children, ...otherProps } = {}) {
    return (
        <Router basename={basename} {...otherProps}>
            {children}
            <Routes>
                {routes.map((route) => {
                    if (route.private) {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<PrivateRoute component={route.component} />}
                            />
                        );
                    } else {
                        return <Route key={route.path} path={route.path} element={route.element} />;
                    }
                })}
                {catchAllRoute && <Route path="*" element={catchAllRoute} />}
            </Routes>
        </Router>
    );
}

createRouter.propTypes = {
    basename: PropTypes.string,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            element: PropTypes.element, // Optional for non-private routes
            component: PropTypes.elementType, // Optional for private routes
            exact: PropTypes.bool,
            private: PropTypes.bool, // Add private prop type
        })
    ),
    catchAllRoute: PropTypes.element,
    children: PropTypes.node, // To allow additional elements like NewNavbar and Footer
};
