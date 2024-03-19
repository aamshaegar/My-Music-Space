package com.example.shopservice.controller;
import com.example.shopservice.model.Item;
import com.example.shopservice.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(path="/shop")
public class ShopController {


    @Autowired
    private ShopService service;

    @GetMapping("/items")
    public List <Item> getRandomItems(@RequestParam(defaultValue = "10") int maxItems){
        return service.getRandomItems(maxItems);
    }

    @GetMapping("items/search")
    public List <Item> getItems(@RequestParam(required = false) String name){
        return service.getItems(name);
    }
}
