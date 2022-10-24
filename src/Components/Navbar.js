import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/navbar.css";
import "../Styles/subnavbar.css";

function Navbar() {

  return (
    <div className="navbar">
      
      <div className="right"></div>
      <div className="center">
        <Link  to="/" className='decoration'><div className='link'>Home</div></Link>
        <Link  to="/About" className='decoration'><div className='link'>About</div></Link>
        <Link to="/Contact" className='decoration'><div className='link'>Contact</div></Link>
        {/* <a href='/Home'><h1 className='linktext'>Home</h1></a>   */}
      </div>
      <div className="left">
        <div className="search">
          <div>Cauta...</div>
        </div>
        <div className="account"></div>
      </div>
    </div>
  )
}

export default Navbar;