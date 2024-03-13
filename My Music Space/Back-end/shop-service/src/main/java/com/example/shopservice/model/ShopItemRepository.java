package com.example.shopservice.model;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;

public interface ShopItemRepository extends MongoRepository<ShopItem, Integer>{
//public ArrayList <ShopItem> findByName(String name);
//public ArrayList <ShopItem> findByNameContaining(String name);
public ArrayList <ShopItem> findTop10ShopItemByNameContaining(String name);
public ArrayList <ShopItem> findFirst10By();
public ArrayList <ShopItem> findTop10ShopItemByType(ItemType type);
}
