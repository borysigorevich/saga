import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Product = {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    price: number
    thumbnail: string
    title: string
}

type StateType = {
    products: Product[]
    cartItems: Record<number, Product & {count: number}>
}

const initialState: StateType  = {
    products: [],
    cartItems: {}
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            console.log(action)
            state.products = action.payload
        },
        addItem: (state, {payload}: PayloadAction<number>) => {
            if(!state.cartItems[payload]) {
                // @ts-ignore
                state.cartItems[payload] = {
                    ...state.products.find(product => product.id === payload),
                    count: 1
                }
            }
            else state.cartItems[payload].count++
        },
        removeItem: (state, action) => {

        }
    }
})

export const {getProducts, addItem, removeItem} = productsSlice.actions