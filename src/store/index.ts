import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";
import {productsSlice} from "./productsSlice";
import {cartSlice} from "./cartSlice";

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(saga)
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

saga.run(rootSaga)