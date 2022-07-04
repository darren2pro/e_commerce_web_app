import { configureStore } from '@reduxjs/toolkit';
import productsInCartReducer from './cart-products-slice';

export const store = configureStore({
    reducer: {
        productsInCart: productsInCartReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
