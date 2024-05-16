import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Rent from './Components/RentDiv/Rent'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'
import {createRouter} from "./Router/Custom_router.jsx";
import Home from "./Components/HomePage/Home.jsx";
import NotFoundPage from "./Components/404Page.jsx";;
import Weather_page from "./Components/weather_page.jsx";
import Login from "./Components/Login.jsx";
import NewLogin from "./Components/NewLogin.jsx";
import Chat from "./Components/ChatBox/Chat.jsx";
import Messenger from "./Components/ChatBox/Messenger.jsx";
import BookingPage from "./Components/BookingRoom/BookingPage.jsx";

const routes = [
    { path: '/login', element: <NewLogin /> },
    { path: '/', component: Home, exact: true, private: true },
    { path: '/weather', component: Weather_page, private: true },
    { path: '/chat', component: Messenger, private: true },
    { path: '/booking', component: BookingPage, private: true },
];

const App = () => {
  return (
      <div className="w-auto">
          {createRouter({
              basename: '/',
              routes,
              catchAllRoute: <NotFoundPage/>
          })}
      </div>
  )
}

export default App
