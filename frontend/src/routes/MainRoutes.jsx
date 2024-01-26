// MainRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MidSection from '../sections/midsection';
import GamingPCDetails from '../components/gamingpcdetails';
import WorkstationPCDetails from '../components/workstationpcdetails';
import Register from "../sections/auth/register";
import LoginAuth from '../sections/auth/loginAuth';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<MidSection />} />
            <Route path="/gaming-pc" element={<MidSection selectedButton="gaming" />} />
            <Route path="/gaming-pc/:label" element={<GamingPCDetails />} />
            <Route path="/workstation-pc" element={<MidSection selectedButton="workstation" />} />
            <Route path="/workstation-pc/:label" element={<WorkstationPCDetails />} />

            {/* START Auth Section Routes  */}
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<LoginAuth />} />
            {/* END Auth Section Routes  */}
        </Routes>
    );
};

export default MainRoutes;
