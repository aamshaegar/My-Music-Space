package com.example.demo.controller;

import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatMessageRepository;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class ChatService {

    private final ChatMessageRepository repository;

    public ChatService(ChatMessageRepository repository) {
        this.repository = repository;
    }

    public void saveChat(ChatMessage chatMessage){
        repository.save(chatMessage);
        System.out.println("MESSAGE SAVED" + chatMessage);
    }

    public ArrayList<ChatMessage> retrieveChatMessages(String room){
        System.out.println("Retrieve 10 messages from room: " + room);
        return repository.getAllChatMessagesByRoom(room);
    }
}
