import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState} from 'react';
import AppNavbar from "./components/AppNavbar";
import SearchPage from "./components/SearchPage";
import CartPage from "./components/CartPage";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    return(
        <>
            <AppNavbar/>
            <SearchPage cartItems={cartItems} setCartItems={setCartItems}/>
            <h1>Cart</h1>
            <CartPage cartItems={cartItems}/>
        </>

    );
};

export default App;
