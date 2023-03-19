import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "./productsSlice";

type CartType = Record<number, number>

const initialState: CartType = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, {payload}: PayloadAction<number>) => {
            if(!state[payload]) state[payload] = 1
            else state[payload]++
        },
        removeItem: (state, action) => {

        }
    }
})

export const {addItem} = cartSlice.actions