
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    searchTerms:"",
    filteredData:[],
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts(state,action){
            state.products = action.payload
        },
        setSearchTerms(state,action){
            state.searchTerms = action.payload
            state.filteredData = state.products.filter((product)=>product.name.toLowerCase().includes(state.searchTerms.toLowerCase()))
        }
    }
})

export const {setProducts,setSearchTerms} = productSlice.actions
export default productSlice.reducer