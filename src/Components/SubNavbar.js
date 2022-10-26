import React, { useState } from "react";
import "../Styles/subnavbar.css";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-bytesize/menu";
import cartIcon from "@iconify/icons-dashicons/cart";
import "../Styles/lista-categorii.css";
import { Link } from "react-router-dom";
import heavyMultiplicationX from "@iconify/icons-emojione-v1/heavy-multiplication-x";
import plusOutlined from "@iconify/icons-ant-design/plus-outlined";
import minusIcon from "@iconify/icons-akar-icons/minus";
import { useLogout } from '../hooks/useLogout';
import { useGetAuthContex } from '../hooks/useGetAuthContex';

const SubNavbar = () => {
  const { user } = useGetAuthContex()

  const { logout } = useLogout()
  const handleLogout = () => {
    logout()
  }

  const [show, setShow] = useState("hide");
  let body = document.querySelector(".full");
  const close = () => {
    setShow("hide");
    body.classList.remove("visibel");
  };
  const handeClick = () => {
    if (show === "hide") {
      setShow("unhide");
      body.classList.add("visibel");
    } else {
      setShow("hide");
      body.classList.remove("visibel");
    }
  };
  let cart = document.querySelector(".cart");
  let [here, setHere] = useState(0);

  let drag = () => {
    if (here === 0) {
      setHere(1);
      cart.classList.add("present");
      body.classList.add("visibel");
    } else {
      cart.classList.remove("present");
      setHere(0);
      body.classList.remove("visibel");
    }
  };
  let undrag = () => {
    if (here === 1) {
      cart.classList.remove("present");
      setHere(0);
      body.classList.remove("visibel");
    }
  };

  return (
    <div className="sub-navbar">
      <div className="left-ceva">
        <Icon icon={menuIcon} onClick={handeClick} className="menu" />
      </div>

      <div className="rigth-ceva">
        <Icon icon={cartIcon} className="cart-icon" onClick={drag} />
        
          {user && (
            <div className="logout-btn-div">
              <button onClick={handleLogout} className="logout-btn">
                LOGOUT
              </button>
            </div>
          )}
        
        {/* {!user && (<button id="auth-btn">
          <Link to="/Sing" className="decoration">
            Sing In
          </Link>{" "}
          /{" "}
          <Link to="/Log" className="decoration">
            Log In
          </Link>
        </button>)} */}
      </div>
      <div className="cart">
        <button onClick={undrag} className="close_button">
          <Icon icon={heavyMultiplicationX} />
        </button>
        <ul>
          <il>
            <div className="product_container">
              <div className="product_image"></div>
              <div className="product_sub_container">
                <div className="product_name">Dacia Logan</div>
                <div className="product_quantity">
                  <div>
                    <Icon icon={plusOutlined} />
                  </div>
                  <div className="quantity">1</div>
                  <div>
                    <Icon icon={minusIcon} />
                  </div>
                </div>
              </div>
            </div>
          </il>
        </ul>
      </div>
      <div className={show}>
        <button className="close-btn" onClick={close}>
          <Icon icon={heavyMultiplicationX} />
        </button>
        <ul>
          <li className="list-element">
            <Link to="/Jucarii" className="decoration">
              <div className="parent">
                <div>Jucarii</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Natura" className="decoration">
              <div className="parent">
                <div>Natura</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Papuci" className="decoration">
              <div className="parent">
                <div>Papuci</div>
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>{" "}
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Tehnologie" className="decoration">
              <div className="parent">
                <div>Tehnologie</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Ceasuri" className="decoration">
              <div className="parent">
                <div>Ceasuri</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Pentru Acasa" className="decoration">
              <div className="parent">
                <div>Pentru Acasa</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Imbracaminte" className="decoration">
              <div className="parent">
                <div>Imbracaminte</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Arta" className="decoration">
              <div className="parent">
                <div>Arta</div>
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="list-element">
            <Link to="/Altele" className="decoration">
              <div className="parent">
                <div>Altele</div>{" "}
                <div>
                  <Icon
                    icon="eva:arrow-ios-forward-fill"
                    className="arrow-icon"
                  />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
