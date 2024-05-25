import React from 'react'
import NavBar from './NavBar/NavBar.jsx'
import Search from './Search.jsx'
import Rent from './Rent.jsx'
import Value from './Value.jsx'
import Footer from './Footer.jsx'
import NewNavbar from "./NavBar/NewNavBar.jsx";


const Home = () => {
    return (
        <div className="w-[100%] m-auto bg-white">
            <Rent/>
            <Value/>

        </div>
    )
}

export default Home
