// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Hero from './pages/hero';
import Dashboard from "./Components/dashboard";
import Navbar from './Components/navbar';
import Themes from './pages/themes';
function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/themes" element={<Themes/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
