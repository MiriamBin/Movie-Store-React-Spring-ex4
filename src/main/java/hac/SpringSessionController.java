package hac;

import hac.springbeans.Cart;
import hac.springbeans.Product;

import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import jakarta.servlet.http.HttpServletRequest;


@Controller
public class SpringSessionController {
    @Autowired
    private Cart sessionCart;

    @PostMapping("/addProduct") //TODO: change this to persistProduct
    public String persistMessage(@RequestParam("msg") String msg) {

        sessionCart.add(new Product());
        System.out.println("Added product to cart");
        return "redirect:/";
    }
}
