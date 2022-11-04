import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=>item.id===newItem.id)
            if(existingItem){
              existingItem.quantity++;
              existingItem.totalPrice+=newItem.pret;
            }else{
              state.itemsList.push({
                titlu: newItem.titlu,
                categorie:newItem.categorie,
                quantity:1,
                email:newItem.email,
                telefon:newItem.telefon,
                locatie:newItem.locatie,
                descriere:newItem.descriere,
                publicatde:newItem.username,
                created_at:newItem.created_at,
                pret:newItem.pret,
                username:newItem.username,
                id:newItem.id,
                totalPrice:newItem.pret
              })
            }
            state.totalQuantity++;
        },
        removeFromCart(state,action){
            const newItem = action.payload
            const id = newItem.id
            
            const existingItem = state.itemsList.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
            }else{
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.pret  
                state.totalQuantity--
            }
        },
        setShowCart(state){
          state.showCart=true;
        },
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice