import Home from './pages/Home';
import TodoApp from './pages/TodoApp';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@material-ui/core';
import {blue, orange} from '@material-ui/core/colors';
import {PRODUCT_ITEMS} from "./components/BasicList";
import ProductDetailsPage, {ProductDetailsPageProps} from "./components/ProductDetailsPage";

const DATA = [
    { id: 'todo-0', name: 'Eat', isCompleted: true },
    { id: 'todo-1', name: 'Sleep', isCompleted: false },
    { id: 'todo-2', name: 'Code', isCompleted: false },
];

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App = () => {
    const productRoutes = PRODUCT_ITEMS.map((product: ProductDetailsPageProps, index: number) => {
        return (
            <Route key={product.id} path={`/products/${product.id}`}>
                <ProductDetailsPage item={product.item} id={product.id} series={product.series} price={product.price} description={product.description} />
            </Route>
        );
    });
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/todoApp"
                            element={<TodoApp tasks={DATA} />}
                        />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
