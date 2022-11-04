import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import "../Styles/subnavbar.css";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { Icon } from "@iconify/react";

function Navbar() {
  const { user } = useGetAuthContex();
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-left"></div>
      </Link>
      <div className="navbar-center">
        <Link to="/" className="dec">
          <div className="link">Home</div>
        </Link>
        <Link to="/About" className="dec">
          <div className="link">Products</div>
        </Link>
        <Link to="/Contact" className="dec">
          <div className="link">Contact</div>
        </Link>
      </div>
      <div className="navbar-right">
        <div>Log in:</div>
        {user && <div className="navbar-user">{user.username}</div>}
        <Icon icon="ep:arrow-down-bold" />
      </div>
    </div>
  );
}

export default Navbar;
