package hac.springbeans;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;

/**
 * This class is responsible for the cart.
 */
@Component("cartBean")
@Primary
public class Cart implements Serializable {
    @Serial
    private static final long serialVersionUID = 1234567L;

    private ArrayList<Product> cart;
    private double total;

    /**
     * This constructor is responsible for initializing the cart.
     */
    public Cart() {
        cart = new ArrayList<Product>();
    }

    /**
     * This method is responsible for adding a product to the cart.
     * @param product - the product that was sent in the request
     */
    public void add(Product product) {
        if(!cart.contains(product)){
            cart.add(product);
            total += product.getPrice();
        }
    }

    /**
     * This method is responsible for removing a product from the cart.
     * @param id - the id of the product that was sent in the request
     * @return - true if the product was removed, false otherwise
     */
    public boolean removeProduct(Integer id) {
        Product productToRemove = null;
        for (Product product : cart) {
            if (product.getId().equals(id)) {
                productToRemove = product;
                break;
            }
        }
        if (productToRemove != null) {
            cart.remove(productToRemove);
            total -= productToRemove.getPrice();
            return true;
        }
        return false;
    }

    /**
     * getter - this method gets the cart
     * @return - the cart
     */
    public ArrayList<Product> getCart() {
        return cart;
    }

    /**
     * setter - this method sets the cart
     * @param cart
     */
    public void setCart(ArrayList<Product> cart) {
        this.cart = cart;
    }

    /**
     * getter - this method gets the total
     * @return - the total
     */
    public double getTotal() {
        return total;
    }

    /**
     * setter - this method sets the total
     * @param total - the total
     */
    public void setTotal(double total) {
        this.total = total;
    }

    /**
     * This method is responsible for getting the total price of the cart.
     * @return - the total price of the cart
     */
    public Double getTotalPrice() {
        Double total = 0.0;
        for (Product product : cart) {
            total += product.getPrice();
        }
        return total;
    }
}
