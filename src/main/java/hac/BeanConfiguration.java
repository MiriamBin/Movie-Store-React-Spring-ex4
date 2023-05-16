package hac;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.context.annotation.ApplicationScope;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.context.annotation.SessionScope;
@Configuration
public class BeanConfiguration {

    @Bean
    @SessionScope
    public Cart cart() {
        //TODO: maybe add products to cart here?
        return new Cart();
    }

    @Bean
    @SessionScope
    public Product product() {
        //TODO: maybe set somethings here?
        return new Product();
    }
}
