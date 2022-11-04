import { useEffect, useState } from "react";
import React from "react";
import "../Styles/allproducts.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Icon } from "@iconify/react";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { cartActions } from "./cart";


const AllProducts = () => {
  const { user } = useGetAuthContex();
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  const dispatch = useDispatch()
  function addToCart(titlu, categorie, email, telefon, locatie, descriere, username, created_at, pret, id) {
    dispatch(cartActions.addToCart({
        titlu,
        categorie,
        email,
        telefon,
        locatie,
        descriere,
        username,
        created_at,
        pret,
        id
    }))
  }
  const [alldata, setAllData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch("/api/sell/getall");
        const json = await response.json();
        await setAllData(json);
      } catch (error) {
        console.log("eroare: ", error);
      }
    };
    getAllData();
  }, []);
  const navigate = useNavigate();
  function deleteProduct(id) {
    fetch("/api/sell/delete/" + id, {
      method: "DELETE",
    })
      .then(() => console.log("deleted"))
      .then(() => navigate(0))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      {alldata.map((item) => {
        return (
          <div key={item._id} className="all-parent-div">
            <img className="all-image" src={item.poza} alt={item.poza} />
            <div className="all-main">
              <div>
                <div className="all-prodinfo all-title">
                  Titlu: {item.titlu}
                </div>
                <div className="all-prodinfo all-categories">
                  Categorie: {item.categorie}
                </div>
                <div className="all-prodinfo all-email">
                  Email: {item.email}
                </div>
                <div className="all-prodinfo all-phone">
                  Telefon: {item.telefon}
                </div>
                <div className="all-prodinfo all-location">
                  Locatie: {item.locatie}
                </div>
                <div className="all-prodinfo all-description">
                  Descriere: {item.descriere}
                </div>
              </div>
              <div className="all-left">
                <div className="all-prodinfo all-price">Pret: {item.pret}</div>
                <div className="all-left-subcontainer"></div>
              </div>
              <div className="all-footer">
                <div className="all-prodinfo all-username">
                  Publicat de: {item.username}
                </div>
                {user.username === item.username && (
                  <Icon
                    icon="material-symbols:system-update-alt-rounded"
                    className="all-settings"
                    onClick={() => addToCart(item.titlu, item.categorie, item.email, item.telefon, item.locatie, item.descriere, item.username, item.created_at, item.pret, item._id)}
                  />
                )}
                {user.username === item.username && (
                  <Icon
                    icon="fluent:delete-16-filled"
                    className="all-delete"
                    onClick={() => deleteProduct(item._id)}
                  />
                )}
                <div className="all-prodinfo all-date">
                  {formatDistanceToNow(new Date(item.created_at), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className="all-right">
              <Icon icon="fa:shopping-cart" className="all-cart" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
