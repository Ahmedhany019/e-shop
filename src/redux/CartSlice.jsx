
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    totalPrice:0,
    totalQuantity:0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const existingItem = state.products.find((item)=> item.id === newItem.id)
            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }else{
                state.products.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    image:newItem.image
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity++
        },
        removeFromCart(state,action){
            const id = action.payload
            const findId = state.products.find((itemId)=>itemId.id === id)
            if(findId){
                state.totalPrice -= findId.totalPrice
                state.totalQuantity -= findId.quantity
                state.products = state.products.filter((item)=>item.id !== id)
            }
        },
        increaseQuantity(state,action){
            const id = action.payload
            const findId = state.products.find((itemId)=>itemId.id === id)
            if(findId){
                findId.quantity++
                findId.totalPrice += findId.price
                state.totalPrice += findId.price
                state.quantity++
            }
        },
        decreaseQuantity(state,action){
            const id = action.payload
            const findId = state.products.find((itemId)=>itemId.id === id)
            if(findId){
                if(findId.quantity >= 1){
                findId.quantity--
                findId.totalPrice -= findId.price
                state.totalPrice -= findId.price
                state.quantity--
                }
        }
        },
    }
})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer