import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import "../Styles/subnavbar.css";
import { useGetAuthContex } from "../hooks/useGetAuthContex";

function Navbar() {
  const { user } = useGetAuthContex();
  return (
    <div className="navbar">
      <div className="right"></div>
      <div className="center">
        <Link to="/" className="decoration">
          <div className="link">Acasă</div>
        </Link>
        <Link to="/About" className="decoration">
          <div className="link">Despre</div>
        </Link>
        <Link to="/Contact" className="decoration">
          <div className="link">Contact</div>
        </Link>
      </div>
      <div className="left">
        {/* <div className="search">
          <div>Cauta...</div>
        </div> */}
        {user && <div className="navbar-user">Conectat ca: {user.username}</div>}
      </div>
    </div>
  );
}

export default Navbar;
