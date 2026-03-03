import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navber from '../components/Navber';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Navber></Navber>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
              <Footer></Footer>
        </div>
    );
};

export default MainLayout;