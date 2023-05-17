package hac.springbeans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;

@Component("cartBean")
@Primary
public class Cart implements Serializable {
    @Serial
    private static final long serialVersionUID = 1234567L;

    private ArrayList<Product> Cart;

    public Cart() {
        Cart = new ArrayList<Product>();
    }

    public void add(Product product) {
        // TODO check if product is already in cart
        Cart.add(product);
    }

    public void removeProduct(Product product) {
        Cart.remove(product);
    }

    public ArrayList<Product> getCart() {
        return Cart;
    }

    public void setCart(ArrayList<Product> cart) {
        Cart = cart;
    }
}
