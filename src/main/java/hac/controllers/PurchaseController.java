package hac.controllers;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This class is responsible for handling the requests that are related to the purchase of products.
 */
@RestController
public class PurchaseController {
    @Autowired
    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    /**
     *
     * @param purchase - the purchase that was sent in the request
     * @return either the purchase that was added or an error
     */
    @PostMapping("/doPurchase")
    public ResponseEntity<Purchase> addPurchase(@Valid @RequestBody Purchase purchase) {
        Purchase savedPurchase = repository.save(purchase);
        return new ResponseEntity<>(savedPurchase, HttpStatus.CREATED);
    }

    /**
     *  This method is responsible for returning the errors that were found.
     * @param ex - the exception that was thrown
     * @return - the errors that were found
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public Map<String, String> handleValidationExceptions( MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
