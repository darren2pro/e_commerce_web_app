import { createSlice } from '@reduxjs/toolkit';
import { FullProductInformation } from '../pages/ProductDetailsPage';

interface cartProductsState {
    products: FullProductInformation[];
}

const initialState: cartProductsState = {
    products: [],
};

const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProductToCart(state, action) {
            state.products.push(action.payload);
        },
        removeProductFromCart(state, action) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
        },
        removeAllProductsFromCart(state) {
            state.products = [];
        },
    },
});

export const {
    addProductToCart,
    removeProductFromCart,
    removeAllProductsFromCart,
} = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
