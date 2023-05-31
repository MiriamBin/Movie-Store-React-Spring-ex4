package hac.springbeans;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component(value="autowiredProductDependency")
public class Product implements Serializable {
    private Integer id;
    private String title;
    private Double price;
    private String imageUrl;

    public Product() {
        this.id = 0;
        this.title = "";
        this.price = 3.99;
        this.imageUrl = "movie-app/public/image-not-found.jpg";
    }

    public Product(Integer id, String title, Double price, String image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = image;

    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

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
