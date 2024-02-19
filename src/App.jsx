import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  

  return (
    
    <>
    <BrowserRouter basename='/TheStevenKingShow'>
    <NavBar></NavBar>
    <Routes>
      <Route path='/TheStevenKingShow' element={<LandingPage />}></Route>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
