package com.example.demo.config;

import com.example.demo.model.ChatMessage;
import com.google.gson.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.util.FileCopyUtils;
import java.io.*;
import java.nio.charset.StandardCharsets;

@Configuration
public class MongoDBConfig {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    ApplicationContext appContext;

    @Bean
    public int initChatDB() {

        String strJson = null;
        ClassPathResource classPathResource = new ClassPathResource("chatroom.json");
        try {
            byte[] binaryData = FileCopyUtils.copyToByteArray(classPathResource.getInputStream());
            strJson = new String(binaryData, StandardCharsets.UTF_8);
            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            JsonElement jsonElement = gson.fromJson(strJson, JsonElement.class);
            JsonArray jsonArray = jsonElement.getAsJsonArray();

            for (JsonElement element : jsonArray) {
                if (element.isJsonObject()) {
                    JsonObject jsonObject = element.getAsJsonObject();

                    String name = jsonObject.get("collection_name").getAsString();

                    if (!mongoTemplate.collectionExists(name)) {
                        JsonArray jsonMessages = jsonObject.getAsJsonArray("messages");
                        for (JsonElement messageElement : jsonMessages) {
                            if (messageElement.isJsonObject()) {
                                JsonObject messageObject = messageElement.getAsJsonObject();

                                String content = messageObject.get("content").getAsString();
                                String sender = messageObject.get("sender").getAsString();
                                String date = messageObject.get("date").getAsString();

                                mongoTemplate.save(new ChatMessage(content, sender, date), name);
                            }
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return 0;
    }
}
