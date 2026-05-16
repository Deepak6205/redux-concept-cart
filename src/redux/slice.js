import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []
}
const addToCart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            localStorage.setItem('cartItems',JSON.stringify(state.items));
        },
                
        removeItem:(state,action)=>{
            const cartdata = state.items.filter((item) => item.id !== action.payload.id);
            state.items = cartdata;
            localStorage.setItem('cartItems',JSON.stringify(state.items));
        },
        clearCart :()=>{
            return initialState;
        }
    }
})
export const {addItem, removeItem,clearCart} = addToCart.actions
export default addToCart.reducer