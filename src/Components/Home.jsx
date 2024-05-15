import React from 'react'
import NavBar from './NavBar/NavBar'
import Search from './SearchDiv/Search'
import Rent from './RentDiv/Rent'
import Value from './ValueDiv/Value'
import Footer from './FooterDiv/Footer'


const Home = () => {
    return (
        <div className="w-[100%] m-auto bg-white">
            <NavBar/>
            <Search/>
            <Rent/>
            <Value/>
            <Footer/>
        </div>
    )
}

export default Home
