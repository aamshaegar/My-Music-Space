package com.example.My.app.utilities;
import java.util.Base64.Encoder;
import java.util.Random;

public class Encode {

    private final static String baseStringGenerator = "0123456789abcdegfhilmnopqrstuvzwjkòàè+ùABCDEFGHIJKLMNOPQRSTUVWXYZ!?-.,";

    public Encode(){}

    public static String generateRandomPassword(int passwordLen) {
        Random randomGenerator = new Random();
        int baseLen = baseStringGenerator.length();
        StringBuilder sb = new StringBuilder(passwordLen);
        for (int i = 0; i < passwordLen; i++) {
            sb.append(baseStringGenerator.charAt(randomGenerator.nextInt(baseLen)));
        }
        return sb.toString();
    }

    public static String encodeString(String initialString){
        Encoder encoder = java.util.Base64.getEncoder();
        return encoder.encodeToString(initialString.getBytes());
    }


}
