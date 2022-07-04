import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRODUCT_ITEMS } from './components/AllProducts';
import ProductDetailsPage, {
    FullProductInformation,
} from './pages/ProductDetailsPage';
import Cart from './pages/Cart';

const App = () => {
    const productRoutes = PRODUCT_ITEMS.map(
        (product: FullProductInformation, index: number) => {
            const ele = (
                <ProductDetailsPage
                    item={product.item}
                    id={product.id}
                    series={product.series}
                    price={product.price}
                    description={product.description}
                />
            );
            return (
                <Route
                    key={product.id}
                    path={`/products/${product.id}`}
                    element={ele}
                />
            );
        }
    );
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {productRoutes}
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
