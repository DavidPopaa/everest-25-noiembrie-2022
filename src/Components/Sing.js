import React, { useState } from "react";
import "../Styles/sing.css";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useSignUp } from '../hooks/useSignUp';

function Sing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignUp()

  const HandleSignup = async () => {
    // const signup_data = { username, password };
    // let response = await fetch("/api/user/signup", {
    //   method: "POST",
    //   body: JSON.stringify(signup_data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const json = await response.json();
    // console.log(response);
    // console.log(json);

    // if (!response.ok) {
    //   console.log(json.error);
    // }
    // if (response.ok) {
    //   setUsername("");
    //   setPassword("");
    // }
    await signup(username, password)
    setUsername('')
    setPassword('')
    
  };
  return (
    <div className="sing">
      <div className="form-bars"></div>
      <div className="form">
        <div className="form-inputs">
          <div className="form-title">Sing In</div>
          <div className="one">
            <div className="form-username">Username</div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              className="form-input"
              value={username}
            ></input>
          </div>
          <div className="two">
            <div className="form-password">Parolă</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              id="lname"
              name="lname"
              className="form-input"
              value={password}
            ></input>
          </div>
          <div className="three">
            <button className="form-button" onClick={HandleSignup} disabled={isLoading}>
              Înregistrare
            </button>
          </div>
          {error && <div>{error}</div>}
          <div className="four">
            <Link to="/Log" className="dec form-link-sing">Aveți deja un cont?</Link>

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

export default Sing;
