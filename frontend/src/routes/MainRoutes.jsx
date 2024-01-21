// MainRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MidSection from '../sections/midsection';
import GamingPCDetails from '../components/gamingpcdetails';
import WorkstationPCDetails from '../components/workstationpcdetails'; // Create a new component for workstation PC details

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<MidSection/>}/>
      <Route path="/gaming-pc" element={<MidSection selectedButton="gaming" />} />
      <Route path="/gaming-pc/:label" element={<GamingPCDetails />} />
      <Route path="/workstation-pc" element={<MidSection selectedButton="workstation" />} />
      <Route path="/workstation-pc/:label" element={<WorkstationPCDetails />} />
    </Routes>
  );
};

export default MainRoutes;
