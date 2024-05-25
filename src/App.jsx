import React from 'react';
import Footer from './Components/HomePage/Footer.jsx';
import { createRouter } from './Router/Custom_router.jsx';
import Home from './Components/HomePage/Home.jsx';
import NotFoundPage from './Components/404Page.jsx';
import Weather_page from './Components/weather_page.jsx';
import NewLogin from './Components/NewLogin.jsx';
import Messenger from './Components/ChatBox/Messenger.jsx';
import BookingPage from './Components/BookingRoom/BookingPage.jsx';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm.jsx';
import NewNavbar from './Components/HomePage/NavBar/NewNavBar.jsx';
import UserProfile from "./Components/Profile/UserProfile.jsx";
import GGMap from "./Components/Map/GGMap.jsx";

const routes = [
    { path: '/login', element: <NewLogin /> },
    { path: '/', component: Home, exact: true, private: true },
    { path: '/weather', component: Weather_page, private: true },
    { path: '/chat', component: Messenger, private: true },
    { path: '/booking', component: BookingPage, private: true },
    { path: '/feedback', component: FeedbackForm, private: true },
    {path: 'profile', component: UserProfile, private: true },
    { path:'/map', component: GGMap, private: true },
];

const App = () => {
    return (
        <div className="w-auto">
            {createRouter({
                basename: '/',
                routes,
                catchAllRoute: <NotFoundPage />,
                children: (
                    <>
                        <NewNavbar />
                    </>
                ),
            })}
            <Footer />
        </div>
    );
};

export default App;
