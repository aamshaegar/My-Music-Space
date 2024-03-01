package com.example.demo.model;
import org.springframework.data.domain.Limit;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.ArrayList;


public interface ChatMessageRepository extends MongoRepository<ChatMessage, Integer> {
    ArrayList<ChatMessage> findChatMessageByRoomOrderByDateDesc(String room, Limit limit);
}