// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './pages/hero';
import Dashboard from "./Components/dashboard";

import Themes from './pages/themes';
import ThemeDetail from './Components/ThemeDetail';
import Userprofile from './pages/userprofile';
import ManagePage from './pages/Managepage';
// import { Provider } from 'react-redux';}

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/themes" element={<Themes />}></Route>
            <Route path="/theme/:index" element={<ThemeDetail />} />
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/admin/manage" element={<ManagePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
