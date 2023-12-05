package com.example.demo.controller;

import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatMessageRepository;
import com.example.demo.model.MessageType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatMessageRepository repository;

    public void saveChat(ChatMessage chatMessage){
        repository.save(chatMessage);
        System.out.println("MESSAGE SAVED" + chatMessage);
    }
}
