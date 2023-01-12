import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Share/Footer/Footer';
import NavBar from '../Page/Share/NavBar/NavBar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='mt-32'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;