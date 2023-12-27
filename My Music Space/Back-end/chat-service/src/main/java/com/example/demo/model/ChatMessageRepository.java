package com.example.demo.model;
import org.springframework.data.domain.Limit;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.ArrayList;

/*
public interface ChatMessageRepository extends CrudRepository<ChatMessage,Long> {
    @Query(value = "SELECT c FROM ChatMessage c WHERE c.room = :room ORDER BY c.date desc LIMIT 10")
    ArrayList<ChatMessage> getAllChatMessagesByRoom(@Param("room") String room);

}
*/

public interface ChatMessageRepository extends MongoRepository<ChatMessage, Integer> {


    // Select first 10 elements
    ArrayList<ChatMessage> findChatMessageByRoomOrderByDateDesc(String room, Limit limit);
}