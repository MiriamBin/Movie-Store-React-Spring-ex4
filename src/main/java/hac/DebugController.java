package hac;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * This code is for debugging purposes only.
 * You can check the DB contents by visiting http://localhost:8080/debug/purchases
 * You may add new routes to this controller if you want to test your code.
 * This class will not be graded (ignored by the grader).
 */
@RestController
@RequestMapping("/debug")
public class DebugController {
    /**
     * This is the JPA repository (SQL database)
     */
    @Autowired
    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    /**
     * This method is responsible for returning all the purchases in the database.
     * @return - all the purchases in the database
     */
    @GetMapping("/purchases")
    public List<Purchase> showPurchases() {
        return repository.findAll(); // this is a JPA method to get all the purchases
    }

    /**
     * This method is responsible for adding a purchase to the database.
     * @param purchase - the purchase that was sent in the request
     * @return - the purchase that was added
     */
    @PostMapping("/purchases")
    public Purchase addPurchase(Purchase purchase) {
        return repository.save(purchase); // this is a JPA method to save a purchase to the database
    }
}
