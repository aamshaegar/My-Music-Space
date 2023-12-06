package com.example.demo.controller;
import com.example.demo.model.ChatMessage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/chat/messages")
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
