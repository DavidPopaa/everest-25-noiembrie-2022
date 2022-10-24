import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SubNavbar from './Components/SubNavbar';
import Categories from './Components/Categories';
import Footer from './Components/Footer';


function App() {
  
  return (
    <div className="App">
      <div className='full'></div>
      <Router>
      
      <Navbar />
      <SubNavbar />
        <Routes>
          <Route path='/' element={<Categories/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
