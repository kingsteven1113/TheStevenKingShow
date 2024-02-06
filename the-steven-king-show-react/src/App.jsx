import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    
    <>
    <BrowserRouter>
    <NavBar></NavBar>

    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
