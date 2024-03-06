package com.example.demo.controller;

import com.example.demo.model.ChatMessage;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.regex.Pattern;

@Service
public class ChatService {

    @Autowired
    private MongoTemplate template;

    @Autowired
    private MongoClient client;


    public ArrayList<String> getFirstCollections(){
        MongoDatabase db = client.getDatabase("chatDB");
        MongoIterable<String> collections = db.listCollectionNames();
        ArrayList<String> filteredCollectionNames = new ArrayList<>();

        int i = 0;
        for (String collectionName : collections) {
            if (i < 9){filteredCollectionNames.add(collectionName);
            }else{break;}
            i++;
        }
        System.out.println("Retrieved first collections: " + filteredCollectionNames);
        return filteredCollectionNames;
    }

    public ArrayList<String> getCollectionNames(String query){
        MongoDatabase db = client.getDatabase("chatDB");
        MongoIterable<String> collections = db.listCollectionNames();

        ArrayList<String> filteredCollectionNames = new ArrayList<>();
        String regex = "(^" + query + "\\w*)|.*" + query + ".*";
        Pattern pattern = Pattern.compile("^" + regex, Pattern.CASE_INSENSITIVE);

        for (String collectionName : collections) {
            if (pattern.matcher(collectionName).find()) {
                filteredCollectionNames.add(collectionName);
            }
        }
        System.out.println("Research collections: " + filteredCollectionNames);
        return filteredCollectionNames;
    }


    public void saveChat(ChatMessage chatMessage){
        template.save(chatMessage,chatMessage.getRoom());
        System.out.println("MESSAGE SAVED" + chatMessage + " --- On collection: " + chatMessage.getRoom());
    }

    public ArrayList<ChatMessage> retrieveChatMessages(String room){
        System.out.println("Retrieve 10 messages from room: " + room);
        Query query = new Query().limit(10);
        query.with(Sort.by(Sort.Order.desc("date")));
        return (ArrayList<ChatMessage>) template.find(query,ChatMessage.class, room);
    }
}
