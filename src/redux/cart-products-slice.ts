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
    },
});

export const { addProductToCart } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
