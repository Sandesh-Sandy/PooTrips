import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Slide, Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Dashboard from './components/Dashboard'
import Drawer from './components/DrawerComp';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import CochinTrip from './components/CochinTrip';
import PooLogo from './images/poologo.svg'
import Footer from './components/Footer';

function App() {

  const [ display, setDisplay ] = useState(false)
  const [ openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    setTimeout(() => {
    setDisplay(false)
    }, 2000)
  }, [])

  return (
    <Router>         
      { display ?
        <div className="App">
          <header className="App-header">
            <div className='d-flex align-items-center justify-content-center'>
              <Slide direction='down' timeout={1000} in={display}>
                <img src={PooLogo} height='70rem' width='70rem' />
              </Slide>
              <Slide direction='up' in={true} timeout={1000}>
                <h1 style={{ marginLeft: '1rem' }}>Poo Trips</h1>
              </Slide>
            </div>
            
          </header>
        </div> :
        <>
          <NavBar setOpenDrawer={setOpenDrawer} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/cochin_trip_travellers' element={<CochinTrip />} />
          </Routes>
          <Footer />
          <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </>
      }       
                     
    </Router>
  );
}

export default App;
