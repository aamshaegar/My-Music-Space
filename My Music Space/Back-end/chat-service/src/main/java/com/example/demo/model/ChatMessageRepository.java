package com.example.demo.model;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface ChatMessageRepository extends CrudRepository<ChatMessage,Long> {
    @Query(value = "SELECT c FROM ChatMessage c WHERE c.room = :room ORDER BY c.date desc LIMIT 10")
    ArrayList<ChatMessage> getAllChatMessagesByRoom(@Param("room") String room);

}
