import React, { useState } from "react";
import "../Styles/subnavbar.css";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-bytesize/menu";
import cartIcon from "@iconify/icons-dashicons/cart";
import "../Styles/lista-categorii.css";
import { Link } from "react-router-dom";
import heavyMultiplicationX from "@iconify/icons-emojione-v1/heavy-multiplication-x";
import { useLogout } from "../hooks/useLogout";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const SubNavbar = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });
  const { user } = useGetAuthContex();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

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
  //******************* */
  // HTML
  //******************* */
  return (
    <div className="sub-container">
      {/* ************************ */}
      {/* SubNavbar */}
      {/* ************************ */}
      <div className="sub-left">
        <Icon
          icon="heroicons-solid:menu-alt-2"
          onClick={handeClick}
          className="sub-menu"
        />
      </div>
      <div className="sub-right">
        <Icon icon={cartIcon} className="sub-cart" onClick={drag} />
        <h1>{totalQuantity}</h1>
      </div>
      <div className="sub-cloud">
        {user && (
          <div className="sub-logout">
            <button onClick={handleLogout} className="sub-logout-btn">
              LOGOUT
            </button>
          </div>
        )}
      </div>
      {/* ************************ */}
      {/* Cart */}
      {/* ************************ */}
      <div className="cart">
        <button onClick={undrag} className="close_button">
          <Icon icon={heavyMultiplicationX} />
        </button>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem
                titlu={item.titlu}
                categorie={item.categorie}
                email={item.email}
                telefon={item.telefon}
                locatie={item.locatie}
                descriere={item.descriere}
                username={item.username}
                pret={item.pret}
                created_at={item.created_at}
                quantity={item.quantity}
                id={item.id}
                totalPrice={item.totalPrice}
                total={total}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* ************************ */}
      {/* Side Bar */}
      {/* ************************ */}
      <div className={show}>
        <button className="close-btn" onClick={close}>
          <Icon icon={heavyMultiplicationX} />
        </button>
        <ul>
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
            <Link to="/PentruAcasa" className="decoration">
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
          <li className="list-element" onClick={close}>
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
