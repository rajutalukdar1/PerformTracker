import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Page/Home/Home/Home';
import Footer from '../Page/Share/Footer/Footer';
import NavBar from '../Page/Share/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;