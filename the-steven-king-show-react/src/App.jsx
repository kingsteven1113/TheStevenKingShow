import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'

function App() {
  

  return (
    
    <>
    
    <NavBar></NavBar>

    <LandingPage></LandingPage>    
    </>
  )
}

export default App
