package com.example.demo.controller;
import com.example.demo.model.ChatMessage;
import com.mongodb.client.MongoIterable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/chat/messages")
//@CrossOrigin(origins = "http://localhost:5500")
public class MessagesController {

    private final ChatService service;

    public MessagesController(ChatService service) {
        this.service = service;
    }

    @GetMapping
    public List<ChatMessage> retrieveMessages(@RequestParam(name = "room") String room){
        return service.retrieveChatMessages(room);
    }

    @GetMapping("/collections")
    public ArrayList<String> getAllCollections(@RequestParam(name = "room") String room){
        return service.getCollectionNames(room);
    }
}
