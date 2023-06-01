import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, {useReducer, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import SearchPage from './components/pages/SearchPage';
import CartPage from './components/pages/CartPage';
import PageNotFound from './components/pages/PageNotFound';
import CheckoutPage from './components/pages/CheckoutPage';
import useCart from './components/hooks/useCart'
import Confirmation from "./components/Confirmation";


export const AppContext = React.createContext(null);

const searchHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state.includes(action.payload) ? state : [...state, action.payload];
        case 'DELETE':
            return state.filter((_, index) => index !== action.payload);
        case 'DELETE_ALL':
            return [];
        default:
            throw new Error();
    }
};

function App() {
    const [searchHistory, dispatch] = useReducer(searchHistoryReducer, []);
    const { cartItems, totalPrice, removeFromCart, clearCart, loading, addToCart, isError} = useCart();

    return (
        <AppContext.Provider value={{searchHistory, dispatch, cartItems, totalPrice, loading, isError, removeFromCart, clearCart, addToCart}}>
            <div
                style={{
                    background: '#212121',
                    minHeight: '100vh', // Set the minimum height to cover the viewport
                }}>
                <BrowserRouter>
                    {/* Routes nest inside one another. Nested route paths build upon
                      parent route paths, and nested route elements render inside
                      parent route elements. See the note about <Outlet> below. */}
                    <Routes>
                        <Route path="/" element={<AppNavbar />}>
                            <Route index element={<SearchPage />}/>
                            <Route path="/cart-page" element={ <CartPage/>}/>
                            <Route path="/checkout-page" element={<CheckoutPage/>}/>
                            <Route path="*" element={<PageNotFound/>}/>
                            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext.Provider>
    );
}

export default App;
