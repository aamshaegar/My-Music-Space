package com.example.shopservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class ShopItem {
    @Id
    private String id;
    private String type;
    private String name;
    private Float price;
    private String vendor;
    private String date;
    private String imagePath;

    public ShopItem(String id, String type, String name, Float price, String vendor, String date, String imagePath) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.vendor = vendor;
        this.date = date;
        this.imagePath = imagePath;
    }

    public ShopItem() {
    }

    public ShopItem(String type, String name, Float price, String vendor, String date, String imagePath) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.vendor = vendor;
        this.date = date;
        this.imagePath = imagePath;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public String toString() {
        return "ShopItem{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", vendor='" + vendor + '\'' +
                ", date=" + date +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }
}