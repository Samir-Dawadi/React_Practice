import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name: "cart",
    initialState: {
        cartDetail:null
    } as {cartDetail:null | Array<{productId:number , quantity:number}>} ,
    reducers: {
        hello:()=>{
             
        }
    }
})
export const { hello } = CartSlicer.actions
export default CartSlicer.reducer      

