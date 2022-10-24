import React from 'react';
import "../Styles/footer.css";
import { Link } from 'react-router-dom';


function Footer() {
  let data = new Date().getFullYear()
   
  return (  
    <div className="footer">
      <div>
        <div><Link to="/termeni-conditi" className='dec'>Termeni și condiții</Link></div>
      </div>
        <div className="bar"></div>
      <div>
        <div className="r">contact@everest.com</div>
        <div className="r e">Copyright &copy; {data}</div>
        <div className="r">All rights reserve.</div>
      </div>
        <div className="bar"></div>
      <div>
        <div><Link to="/termeni-conditi" className='dec'>Politică de Confidențialitate</Link></div>
      </div>
    </div>
  );
}

export default Footer;