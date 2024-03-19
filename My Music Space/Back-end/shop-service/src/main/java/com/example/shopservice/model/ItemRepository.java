package com.example.shopservice.model;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ItemRepository extends MongoRepository<Item, String> {

    List <Item> findByType(ItemType type, PageRequest page);
    List <Item> findTop10ByType(ItemType type);
    List <Item> findTop10ByItemNameContainingAndType(String itemName, ItemType type);

    @Query("[{$match: {itemName: {$regex: ?0, $options: 'i'}}}, {$group: {_id: '$itemType', items: {$push: '$$ROOT'}}}, {$project: {combinedItems: {$slice: ['$items', 10]}}}]")
    List<Item> findTenDocumentsForEachTypeWithNameContaining(String name);

    @Query("[{$group: {_id: '$itemType', items: {$push: '$$ROOT'}}}, {$project: {combinedItems: {$slice: ['$items', 10]}}}]")
    List<Item> findTenDocumentsForEachType();
}

