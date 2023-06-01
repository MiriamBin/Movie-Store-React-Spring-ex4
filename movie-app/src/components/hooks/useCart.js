import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook for cart
 * @returns {{removeFromCart: removeFromCart, isError: boolean,
 * totalPrice: number, addToCart: addToCart, clearCart: clearCart
 * , cartItems: *[], loading: boolean}} - cartItems, totalPrice, removeFromCart, clearCart, addToCart, loading, isError
 */
const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(true);

    /**
     * Handle fetch data from server
     * @param endpoint - url
     * @param method `GET` or `POST`
     * @param data - data for POST request
     * @returns {Promise<any>} - response data
     */
    const handleFetch = async (endpoint, method, data = null) => {
        try {
            const response = await axios({
                method: method,
                url: endpoint,
                headers: {'Content-Type': 'application/json',},
                data: data,
            });

            if (response.status !== 200) {
                throw new Error('Something went wrong');
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Fetch cart data from server
     */
    useEffect(() => {
        handleFetch('/getCart', 'GET')
            .then(data => {
                setCartItems(data.cart);
                setTotalPrice(data.total);
                setIsError(false);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    /**
     * Remove product from cart by id
     * @param productId - product id
     */
    const removeFromCart = (productId) => {
        handleFetch('/removeProduct', 'POST', { id: productId })
            .then(data => {
                setCartItems(cartItems.filter(item => item.id !== productId));
                setTotalPrice(data.total);
            })
            .catch(console.error);
    };

    /**
     * Clear cart
     */
    const clearCart = () => {
        handleFetch('/clearCart', 'POST')
            .then(() => {
                setCartItems([]);
                setTotalPrice(0);
            })
            .catch(console.error);
    };

    /**
     * Add product to cart
     * @param product - product object
     */
    const addToCart = (product) => {
        handleFetch('/addProduct', 'POST', product)
            .then(data => {
                setCartItems(data.cart);
                setTotalPrice(data.total);
            })
            .catch(console.error);
    };

    return { cartItems, totalPrice, removeFromCart, clearCart, addToCart, loading, isError }; // Add addToCart to the returned object
}
export default useCart;