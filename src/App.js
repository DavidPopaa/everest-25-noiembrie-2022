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
import SellProduct from "./Components/SellProduct"
import { useGetAuthContex } from './hooks/useGetAuthContex';
import { Navigate } from "react-router-dom";
import AllProducts from './Components/AllProducts';
import Jucarii from './Components/Jucarii';
import Natura from './Components/Natura';
import Papuci from './Components/Papuci';
import Technologie from './Components/Tehnologie';
import Ceasuri from './Components/Ceasuri';
import PentruAcasa from './Components/PentruAcasa';
import Imbracaminte from './Components/Imbracaminte';
import Arta from './Components/Arta';
import Altele from './Components/Altele';


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
          <Route path='/sell-product' element={<SellProduct />} /> 
          <Route path='allProducts' element={<AllProducts />}/>
          <Route path='/Jucarii' element={<Jucarii />} />
          <Route path='/Natura' element={<Natura />} />
          <Route path='/Papuci' element={<Papuci />} />
          <Route path='/Tehnologie' element={<Technologie />} />
          <Route path='/Ceasuri' element={<Ceasuri />} />
          <Route path='/PentruAcasa' element={<PentruAcasa />} />
          <Route path='/Imbracaminte' element={<Imbracaminte />} />
          <Route path='/Arta' element={<Arta />} />
          <Route path='/Altele' element={<Altele />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;