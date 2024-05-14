import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import Page1 from './components/Home/Page1';
import About from './components/About/About';

function App() {
  
  return (
    <div>
      <div className='app-navbar'>
        <NavBar>

        </NavBar>
      </div>
      <div>
        <Page1></Page1>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
