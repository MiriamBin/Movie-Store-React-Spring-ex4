import { useState, useEffect } from 'react';
import axios from 'axios';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleFetch = async (endpoint, method, data = null) => {
        try {
            const response = await axios({
                method: method,
                url: endpoint,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
            });

            if (response.status !== 200) {
                //TODO: handle error
                throw new Error('Something went wrong');
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleFetch('/getCart', 'GET')
            .then(data => {
                setCartItems(data.cart);
                setTotalPrice(data.total);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    const removeFromCart = (productId) => {
        handleFetch('/removeProduct', 'POST', { id: productId })
            .then(data => {
                setCartItems(cartItems.filter(item => item.id !== productId));
                setTotalPrice(data.total);
            })
            .catch(console.error);
    };

    const clearCart = () => {
        handleFetch('/clearCart', 'POST')
            .then(data => {
                setCartItems([]);
                setTotalPrice(0);
            })
            .catch(console.error);
    };

    const addToCart = (product) => {
        handleFetch('/addProduct', 'POST', product)
            .then(data => {
                setCartItems([...cartItems, data.product]);
                setTotalPrice(data.total);
            })
            .catch(console.error);
    };

    return { cartItems, totalPrice, removeFromCart, clearCart, addToCart, loading }; // Add addToCart to the returned object
}
