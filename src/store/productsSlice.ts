import {createSlice} from "@reduxjs/toolkit";

type StateType = {
    products: Record<string, string>[]
}

const initialState: StateType  = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            console.log(action)
            state.products = action.payload
        }
    }
})

export const {getProducts} = productsSlice.actions