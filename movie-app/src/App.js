import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import SearchPage from "./components/SearchPage";
import CartPage from "./components/CartPage";
import PageNotFound from "./components/PageNotFound";

function App() {
    const [cartItems, setCartItems] = useState([]); //TODO: use database instead of state
    return (
        <>
            <BrowserRouter>
                    <p>
                        This example demonstrates some of the core features of React Router
                        including nested <code>&lt;Route&gt;</code>s,{" "}
                        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
                        "*" route (aka "splat route") to render a "not found" page when someone
                        visits an unrecognized URL.
                    </p>
                    {/* Routes nest inside one another. Nested route paths build upon
                        parent route paths, and nested route elements render inside
                        parent route elements. See the note about <Outlet> below. */}
                    <Routes>
                    <Route path="/" element={<AppNavbar/>}>
                        <Route index element={<SearchPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
                        <Route path="/cart-page" element={ <CartPage cartItems={cartItems}/>}/>
                        <Route path={"*"} element={<PageNotFound/>}/>
                        {/* Using path="*"" means "match anything", so this route
                            acts like a catch-all for URLs that we don't have explicit
                            routes for. */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    );
};

export default App;
