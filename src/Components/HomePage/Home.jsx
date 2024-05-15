import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Search from '../SearchDiv/Search.jsx'
import Rent from '../RentDiv/Rent.jsx'
import Value from '../ValueDiv/Value.jsx'
import Footer from '../FooterDiv/Footer.jsx'
import NewNavbar from "../NavBar/NewNavBar.jsx";


const Home = () => {
    return (
        <div className="w-[100%] m-auto bg-white">
            <NewNavbar/>
            <Search/>
            <Rent/>
            <Value/>
            <Footer/>
        </div>
    )
}

export default Home
