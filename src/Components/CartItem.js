import React from 'react';
import { useDispatch } from 'react-redux';
import "../Styles/subnavbar.css";
import { cartActions } from './cart';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function CartItem({ titlu, categorie, email, telefon, locatie, descriere, username, pret, created_at, quantity, id, totalPrice, total}) {
    const dispatch = useDispatch()
    const incrementCartItem = () => {
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
    const decrementCartItem = () => {
        dispatch(cartActions.removeFromCart({
            id
        }))
    }
  return ( 
    <div>
      <h6>Titlu:  {titlu}</h6>
      <h6>Categorie:  {categorie}</h6>
      <h6>Email:  {email}</h6>
      <h6>Telefon:  {telefon}</h6>
      <h6>Locatie:  {locatie}</h6>
      <h6>Descriere:  {descriere}</h6>
      <h6>Username:  {username}</h6>
      <h6>Pret:  {pret}</h6>
      <h6>Created:  {formatDistanceToNow(new Date(created_at), {addSuffix: true})}</h6>
      <h6>quantity:  {quantity}</h6>
      <h6>Total Pret:  {totalPrice}</h6>
      <button onClick={incrementCartItem}>Increment</button>
      <button onClick={decrementCartItem}>Decrement</button>
      <h1>TOTAL: {total}</h1>
    </div>
   );
}
// className='product-containe'
export default CartItem;