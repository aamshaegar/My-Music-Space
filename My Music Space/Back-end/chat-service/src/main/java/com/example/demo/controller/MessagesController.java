package com.example.demo.controller;
import com.example.demo.model.ChatMessage;
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

        ArrayList<ChatMessage> messages = service.retrieveChatMessages(room);
        /*for(ChatMessage m: messages){
            System.out.println(m);
        }*/
        return messages;

    }
}
