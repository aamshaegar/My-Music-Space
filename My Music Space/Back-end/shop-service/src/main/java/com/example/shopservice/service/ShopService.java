package com.example.shopservice.service;

import com.example.shopservice.model.Item;
import com.example.shopservice.model.ItemRepository;
import com.example.shopservice.model.ItemType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class ShopService {

    @Autowired
    private ItemRepository itemRepository;


    public List<Item> getRandomItems(int maxItems){
        long count = itemRepository.count();
        Random random = new Random();
        int numElement = (int)(count/maxItems);
        int randomIndex = random.nextInt(0,numElement);
        List<Item> items = itemRepository.findByType(ItemType.PRODUCT, PageRequest.of(randomIndex, maxItems));
        //items.addAll(itemRepository.findByType(ItemType.EVENT, PageRequest.of(randomIndex, maxItems)));
        return items;

    }

    public List<Item> getItems(String name){

        if (name != null && !name.isEmpty()) {
            return itemRepository.findTenDocumentsForEachTypeWithNameContaining(name);
        }else{
            return itemRepository.findTenDocumentsForEachType();
        }

    }



}
