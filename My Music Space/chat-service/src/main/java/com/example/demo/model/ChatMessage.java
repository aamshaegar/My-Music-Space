package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table
public class ChatMessage {

    @Id
    @GeneratedValue
    private Long id;
    private String content;
    private String sender;
    private MessageType type;
    private String room;
    private String date;


    public ChatMessage() {

    }

    public ChatMessage(Long id, String content, String sender, MessageType type, String room, String date) {
        this.id = id;
        this.content = content;
        this.sender = sender;
        this.type = type;
        this.room = room;
        this.date = date;
    }

    public ChatMessage(String content, String sender, MessageType type, String room, String date) {
        this.content = content;
        this.sender = sender;
        this.type = type;
        this.room = room;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "ChatMessage{" +
                "content='" + content + '\'' +
                ", sender='" + sender + '\'' +
                ", type=" + type +
                ", room='" + room + '\'' +
                ", date=" + date +
                '}';
    }
}
