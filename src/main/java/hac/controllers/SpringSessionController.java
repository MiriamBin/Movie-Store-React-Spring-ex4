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


@RestController
public class SpringSessionController {
    @Autowired
    @Qualifier("cartBean")
    private Cart sessionCart;

    @PostMapping("/addProduct")
    public ResponseEntity<Cart> persistMessage(@RequestBody Product product) {
        sessionCart.add(product);  // Add the product that was sent in the request
        sessionCart.setTotal(sessionCart.getTotal());  // Update the total

        return new ResponseEntity<>(sessionCart, HttpStatus.OK);
    }

    @GetMapping("/getCart") //TODO: change it to SYNC
    public Cart getCart() {
        return sessionCart;
    }

    @PostMapping("/removeProduct")
    public ResponseEntity<Cart> removeProduct(@RequestBody Map<String, Integer> product) {
        Integer productId = product.get("id");
        System.out.println("Removing product with id: " + productId);
        if (!sessionCart.removeProduct(productId)) {
            System.out.println(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(sessionCart, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(sessionCart, HttpStatus.OK);
    }

    @PostMapping("/clearCart")
    public Cart clearCart() {
        sessionCart.setCart(new ArrayList<Product>());  // Clear the cart
        sessionCart.setTotal(0);  // Clear the total
        return sessionCart;
    }
}
