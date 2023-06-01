package hac.repo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;

import java.io.Serializable;

/**
 * a purchase is a record of a user buying a product. You should not need to edit this file
 * but if you feel like you need to, please get in touch with the teacher.
 */
@Entity
public class Purchase implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The first name of the user who made the purchase
     */
    @NotEmpty(message = "First name is mandatory")
    private String firstName;

    /**
     * The last name of the user who made the purchase
     */
    @NotEmpty(message = "Last name is mandatory")
    private String lastName;

    /**
     * The email of the user who made the purchase
     */
    @NotEmpty(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    private String email;

    /**
     * The total amount of the purchase
     */
    @PositiveOrZero(message = "Payment must be positive or zero")
    private Double payment = 0.0;

    /**
     * Constructor
     * @param email the email of the user who made the purchase
     * @param total the total amount of the purchase
     * @param firstName the first name of the user who made the purchase
     * @param lastName the last name of the user who made the purchase
     */
    public Purchase(String email, Double total, String firstName, String lastName) {
        this.email = email;
        this.payment = total;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Constructor
     */
    public Purchase() {

    }


    /**
     * Getter for the id
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * Getter for the first name
     * @return the first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Getter for the last name
     * @return the last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Getter for the total amount of the purchase
     * @return the total amount of the purchase
     */
    public Double getPayment() {
        return payment;
    }

    /**
     * Getter for the email
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Setter for the id
     * @param id the id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Setter for the first name
     * @param firstName the first name
     */
    public void setFirstName(String firstName) {
        this.firstName=firstName;
    }

    /**
     * Setter for the last name
     * @param lastName the last name
     */
    public void setLastName(String lastName) {
        this.lastName=lastName;
    }

    /**
     * Setter for the total amount of the purchase
     * @param payment the total amount of the purchase
     */
    public void setPayment(Double payment) {
        this.payment=payment;
    }

    /**
     * Setter for the email
     * @param email the email
     */
    public void setEmail(String email) {
        this.email=email;
    }
}


