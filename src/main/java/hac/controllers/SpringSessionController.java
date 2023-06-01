package hac.controllers;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

/**
 * This class is responsible for handling the requests that are related to the purchase of products.
 */
@RestController
public class SpringSessionController {
    @Autowired
    @Qualifier("cartBean")
    private Cart sessionCart;

    /**
     * This method is responsible for adding a product to the cart.
     * @param product - the product that was sent in the request
     * @return - the cart
     */
    @PostMapping("/addProduct")
    public ResponseEntity<Cart> persistMessage(@RequestBody Product product) {
        sessionCart.add(product);  // Add the product that was sent in the request
        sessionCart.setTotal(sessionCart.getTotal());  // Update the total
        return new ResponseEntity<>(sessionCart, HttpStatus.OK);
    }

    /**
     * This method is responsible for returning the cart.
     * @return - the cart
     */
    @GetMapping("/getCart") //TODO: change it to SYNC
    public Cart getCart() {
        return sessionCart;
    }

    /**
     * This method is responsible for removing a product from the cart.
     * @param product - the product that was sent in the request
     * @return - the cart
     */
    @PostMapping("/removeProduct")
    public ResponseEntity<Cart> removeProduct(@RequestBody Map<String, Integer> product) {
        Integer productId = product.get("id");
        if (!sessionCart.removeProduct(productId)) {
            return new ResponseEntity<>(sessionCart, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(sessionCart, HttpStatus.OK);
    }

    /**
     * This method is responsible for clearing the cart.
     * @return - the cart
     */
    @PostMapping("/clearCart")
    public ResponseEntity<Cart> clearCart() {
        sessionCart.setCart(new ArrayList<Product>());  // Clear the cart
        sessionCart.setTotal(0);  // Clear the total
        return new ResponseEntity<>(sessionCart, HttpStatus.OK);
    }
}
