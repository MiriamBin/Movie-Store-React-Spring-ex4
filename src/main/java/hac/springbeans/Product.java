package hac.springbeans;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * This class is responsible for the product.
 */
@Component(value="autowiredProductDependency")
public class Product implements Serializable {
    private Integer id;
    private String title;
    private Double price;
    private String imageUrl;

    /**
     * This constructor is responsible for initializing the product.
     */
    public Product() {
        this.id = 0;
        this.title = "";
        this.price = 3.99;
        this.imageUrl = "movie-app/public/image-not-found.jpg";
    }

    /**
     * This constructor is responsible for initializing the product.
     * @param id - the id of the product
     * @param title - the title of the product
     * @param price - the price of the product
     * @param image - the image of the product
     */
    public Product(Integer id, String title, Double price, String image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = image;

    }

    /**
     * This method is responsible for getting the title of the movie/series.
     * @return - the title of the product
     */
    public String getTitle() {
        return title;
    }
    /**
     * This method is responsible for setting the title of the movie/series.
     * @param title - the title of the product
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * This method is responsible for getting the id of the movie/series.
     * @return - the id of the product
     */
    public Integer getId() {
        return id;
    }
    /**
     * This method is responsible for setting the id of the movie/series.
     * @param id - the id of the product
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method is responsible for getting the price of the movie/series.
     * @return - the price of the product
     */
    public Double getPrice() {
        return price;
    }
    /**
     * This method is responsible for setting the price of the movie/series.
     * @param price - the price of the product
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    /**
     * This method is responsible for getting the image of the movie/series.
     * @return - the image of the product
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * This method is responsible for setting the image of the movie/series.
     * @param imageUrl - the image of the product
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * This method is responsible for getting the string representation of the product.
     * @param other - the product that was sent in the request
     * @return - the string representation of the product
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        if (!(other instanceof Product otherProduct)) {
            return false;
        }

        return this.id.equals(otherProduct.id);
    }
}
