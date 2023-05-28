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
    private double total;

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

    public void removeProduct(Integer id) {
        Product productToRemove = null;
        for (Product product : cart) {
            if (product.getId().equals(id)) {
                productToRemove = product;
                break;
            }
        }
        if (productToRemove != null) {
            cart.remove(productToRemove);
        }
    }


    public ArrayList<Product> getCart() {
        return cart;
    }

    public void setCart(ArrayList<Product> cart) {
        this.cart = cart;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Double getTotalPrice() {
        Double total = 0.0;
        for (Product product : cart) {
            total += product.getPrice();
        }
        return total;
    }
}
