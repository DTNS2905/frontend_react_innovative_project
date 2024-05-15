// src/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/404Page.css'; // Optional: For custom styles

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};

export default NotFoundPage;
