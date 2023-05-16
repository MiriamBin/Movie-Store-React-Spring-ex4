package hac.springbeans;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component(value="autowiredProductDependency")
public class Product implements Serializable {

    private String msg;
//    private Double price;
//    private String description;
//    private String imageUrl;

    public Product() {
        this.msg = "";
//        this.price = 0.0;
//        this.description = "";
//        this.imageUrl = "";
    }

    public Product(String msg) {
        this.msg = msg;
//        this.price = price;
//        this.description = description;
//        this.imageUrl = image;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
//
//    public Double getPrice() {
//        return price;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public String getImageUrl() {
//        return imageUrl;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public void setPrice(Double price) {
//        this.price = price;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public void setImageUrl(String imageUrl) {
//        this.imageUrl = imageUrl;
//    }
}
