package hac.springbeans;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;

@Component("cartBean")
@Primary
public class Cart implements Serializable {
    @Serial
    private static final long serialVersionUID = 1234567L;

    private ArrayList<Product> cart;

    public Cart() {
        cart = new ArrayList<Product>();
    }

    public void add(Product product) {
        if(!cart.contains(product)){
            cart.add(product);
            System.out.println("Added product to cart" + product.getId());
        }
        else {
            System.out.println("Product already in cart"+ product.getId());
        }
    }

    public void removeProduct(Product product) {
        cart.remove(product);
    }

    public ArrayList<Product> getCart() {
        return cart;
    }

    public void setCart(ArrayList<Product> cart) {
        this.cart = cart;
    }
}
