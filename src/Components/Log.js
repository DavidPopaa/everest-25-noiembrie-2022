import React, { useState } from "react";
import "../Styles/log.css";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin'

function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error , isLoading } = useLogin()
  const handleLogin = () => {
    login(username, password)
    setUsername('')
    setPassword('')
  }
  return (
    <div className="log">
      <div className="form-bars"></div>
      <div className="form">
        <div className="form-inputs">
          <div className="form-title">Log In</div>
          <div className="one">
            <div className="form-username">Username</div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              id="fname"
              name="fname"
              className="form-input"
            ></input>
          </div>
          <div className="two">
            <div className="form-password">Parolă</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password} 
              type="text"
              id="lname"
              name="lname"
              className="form-input"
            ></input>
          </div>
          <div className="three">
            <button className="form-button" onClick={handleLogin} disabled={isLoading}>Conectează-te</button>
          </div>
          {error && <div>{error}</div>}
          <div className="four">
            <Link to="/Sing" className="dec">Nu aveti un cont?</Link>

          </div>
        </div>
        {/* links start */}
        {/* <div className="forms-links-container">
          <div className="form-bar-container">
            <div className="form-bar"></div>
            <div className="form-or">sau</div>
            <div className="form-bar"></div>
          </div>
          <div className="form-links">
            <Link to="facebook.com">
              <div className="form-square">
                <Icon icon="akar-icons:facebook-fill" className="form-icon" />
              </div>
            </Link>
            <Link to="google.com">
              <div className="form-square">
                <Icon icon="akar-icons:google-fill" className="form-icon" />
              </div>
            </Link>
          </div>
        </div> */}
        {/* links end */}
      </div>
    </div>
  );
}

export default Log;
