import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Rent from './Components/RentDiv/Rent'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'
import {createRouter} from "./Router/Custom_router.jsx";
import Home from "./Components/Home.jsx";
import NotFoundPage from "./Components/404Page.jsx";;
import Weather_page from "./Components/weather_page.jsx";
import Login from "./Components/Login.jsx";
import NewLogin from "./Components/NewLogin.jsx";

const routes = [
    { path: '/', element: <NewLogin /> },
    { path: '/home', component: Home, exact: true, private: true },
    { path: '/weather', component: Weather_page, private: true },
];

const App = () => {
  return (
      <div>
          {createRouter({
              basename: '',
              routes,
              catchAllRoute: <NotFoundPage/>
          })}
      </div>
  )
}

export default App
