package com.example.demo.config;
import com.example.demo.model.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Configuration
public class MongoDBConfig {

    @Autowired
    private MongoTemplate mongoTemplate;


    private void createListMessages(String room, List<String> randomQueries, List<String> randomAnswer, List<String> randomNames){


        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        Random rand = new Random();
        ArrayList<ChatMessage> messages = new ArrayList<>();

        for(int i = 0; i < randomNames.size(); i++){
            int randomSender = rand.nextInt(randomNames.size()/2);
            String content = "";

            if (i % 2 == 0){
                int randomContent = rand.nextInt(randomQueries.size());
                content = randomQueries.get(randomContent);
            }else{
                int randomContent = rand.nextInt(randomAnswer.size());
                content = randomAnswer.get(randomContent);
            }

            messages.add(new ChatMessage(
                    content,
                    randomNames.get(randomSender),
                    "CHAT",
                    dateFormat.format(date)));
        }

        mongoTemplate.insert(messages, room);

    }

    @Bean
    public int insertMessages() {

        // ["#general","#classic","#metal","#Funky","#R&B","#Indie","#Soul","Banana","Casa"];
        List<String> collectionNames = List.of("General", "Classic", "Metal", "Pop", "Funky", "Indie", "Soul", "Folk", "Rock", "R&B", "House", "Lofi");
        List<String> randomNames = List.of("Aldo", "Michele", "Corrado", "Lorenzo", "Giovanna", "Harry Potter", "Mario Giordano", "Fragola 86", "Petardo 666");
        List<String> randomQueries = List.of(
                "Hey, how's it going?",
                "What's new?",
                "How are you today?",
                "Do you have any plans for the weekend?",
                "What are your thoughts on the new movie?",
                "I'm so excited for the upcoming holiday! And you?lò",
                "Did you hear about the recent news?");

        List<String> randomAnswer = List.of(
                "I'm doing well, thanks for asking! How about you?",
                "I'm great, thanks for asking!",
                "Not much, just been working a lot."
        );

        for (String collection: collectionNames){
            if (mongoTemplate.collectionExists(collection)){
                mongoTemplate.dropCollection(collection);
            }
            this.createListMessages(collection, randomQueries, randomAnswer, randomNames);
        }

        return 0;
    }

}








