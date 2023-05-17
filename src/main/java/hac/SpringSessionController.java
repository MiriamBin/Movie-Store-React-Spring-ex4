package hac;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;


@RestController
public class SpringSessionController {
    @Autowired
    @Qualifier("cartBean")
    private Cart sessionCart;

    @PostMapping("/addProduct")
    public Product persistMessage(@RequestBody Product msg) {
        sessionCart.add(msg);  // Add the product that was sent in the request
        System.out.println("Added product to cart"); //TODO: DEBUG
        System.out.println(msg.getMsg());
        return msg;
    }
}
