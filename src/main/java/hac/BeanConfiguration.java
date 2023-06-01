package hac;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.context.annotation.ApplicationScope;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.context.annotation.SessionScope;

/**
 * This class is responsible for the configuration of the beans.
 */
@Configuration
public class BeanConfiguration {

    /**
     * This method is responsible for creating a new cart.
     * @return
     */
    @Bean
    @SessionScope
    public Cart cart() {
        //TODO: maybe add products to cart here?
        return new Cart();
    }

    /**
     * This method is responsible for creating a new product.
     * @return - the product
     */
    @Bean
    @SessionScope
    public Product product() {
        //TODO: maybe set somethings here?
        return new Product();
    }
}
