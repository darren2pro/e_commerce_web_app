import Home from './pages/Home';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@material-ui/core';
import {blue, orange} from '@material-ui/core/colors';
import {PRODUCT_ITEMS} from "./components/BasicList";
import ProductDetailsPage, {ProductDetailsPageProps} from "./components/ProductDetailsPage";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App = () => {
    const productRoutes = PRODUCT_ITEMS.map((product: ProductDetailsPageProps, index: number) => {
        const ele = (<ProductDetailsPage item={product.item} id={product.id} series={product.series} price={product.price} description={product.description} />);
        return (
            <Route key={product.id} path={`/products/${product.id}`} element={ele} />
        );
    });
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {productRoutes}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
