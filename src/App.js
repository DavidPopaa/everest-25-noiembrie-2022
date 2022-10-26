import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SubNavbar from './Components/SubNavbar';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import About from './Components/About';
import Sing from "./Components/Sing";
import Log from './Components/Log';
import Contact from "./Components/Contact";
import { useGetAuthContex } from './hooks/useGetAuthContex';
import { Navigate } from "react-router-dom";


function App() {
  const { user } = useGetAuthContex()
  
  return (
    <div className="App">
      <div className='full'></div>
      <Router>
      {user && <Navbar />}
      {user && <SubNavbar />}
        <Routes>
          <Route path='/' element={user ? <Categories/> : <Navigate to='/Log'/>} />
          <Route path='/Sing' element={!user ? <Sing /> : <Navigate to='/'/>}/>
          <Route path='/About' element={user ? <About /> : <Navigate to='/Log'/>} />
          <Route path='/Log' element={!user ? <Log /> : <Navigate to='/'/>} />
          <Route path='/Contact' element={user ? <Contact /> : <Navigate to='/Log'/>} /> 
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
