import React from "react";
import "../Styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="footer">
      <div>
        <div>
          <Link to="/termeni-conditi" className="dec">
            Termeni și condiții
          </Link>
        </div>
      </div>
      <div className="bar"></div>
      <div  className="footer-display">
        <div className="footer-style">everestofficialcompany@gmail.com</div>
        <div className="footer-style">Copyright &copy; {data}</div>
        <div className="footer-style">All rights reserve.</div>
      </div>
      <div className="bar"></div>
      <div>
        <div>
          <Link to="/termeni-conditi" className="dec">
            Politică de Confidențialitate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
