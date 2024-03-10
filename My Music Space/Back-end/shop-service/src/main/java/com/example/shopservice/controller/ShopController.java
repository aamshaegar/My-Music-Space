package com.example.shopservice.controller;
import com.example.shopservice.model.ShopItem;
import com.example.shopservice.model.ShopItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/shop")
public class ShopController {

    @Autowired
    private MongoTemplate template;

    @Autowired
    private ShopItemRepository Repository;

    @GetMapping("/random")
    public List <ShopItem> getRandomItems(){
        //Query query = new Query().limit(10);
        return Repository.findFirst10By();
        //return template.find(query, ShopItem.class);
    }

    @GetMapping("/search")
    public List <ShopItem> getItems(@RequestParam(name="query") String query){
        //System.out.println(query);
        //return Repository.findByNameContaining(query);
        return Repository.findTop10ShopItemByNameContaining(query);
        //return Repository.findByName(query);
    }
}
