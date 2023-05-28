package hac;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
public class SpringSessionController {
    @Autowired
    @Qualifier("cartBean")
    private Cart sessionCart;

    @PostMapping("/addProduct")
    public Product persistMessage(@RequestBody Product product) {
        sessionCart.add(product);  // Add the product that was sent in the request
        sessionCart.setTotal(sessionCart.getTotal() + product.getPrice());  // Update the total
        return product; //TODO: maybe return the cart instead?
    }

    @GetMapping("/getCart")
    public Cart getCart() {
        return sessionCart;
    }

    @PostMapping("/removeProduct")
    public ArrayList<Product> removeProduct(@RequestBody Integer productId) {
        sessionCart.removeProduct(productId);  // Remove the product that was sent in the request
        System.out.println("Removed product from cart"); //TODO: DEBUG
        return sessionCart.getCart();
    }

    @PostMapping("/clearCart")
    public Cart clearCart() {
        sessionCart.setCart(new ArrayList<Product>());  // Clear the cart
        System.out.println("Cleared cart"); //TODO: DEBUG
        return sessionCart;
    }
}
