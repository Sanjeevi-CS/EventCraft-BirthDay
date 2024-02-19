// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Hero from './pages/hero';
function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
