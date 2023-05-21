import React, { useEffect, useState } from 'react';
import MediaList from "./MediaList";
import CartItems from "./CartItems";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('/getCart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    console.log(cartItems);
    return (
        <>
            <h1>Cart Page</h1>
            <CartItems items={cartItems}/>
        </>
    )
}
export default CartPage;
