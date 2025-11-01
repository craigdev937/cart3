import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartState } from "../models/Interfaces";

const initialState: ICartState = {
    cart: [],
    totalQuantity: 0,
    toalAmount: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        
    }
});

export const CartReducer = CartSlice.reducer;


