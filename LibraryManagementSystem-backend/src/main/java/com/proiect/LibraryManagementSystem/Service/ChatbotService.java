package com.proiect.LibraryManagementSystem.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class ChatbotService {

    private final String ollamaModel = "llama3.2";
    private final String ollamaUrl = "http://localhost:11434/api/generate";

    public Map<String, String> getAiResponse(String prompt) {
        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> request = new HashMap<>();
        request.put("model", ollamaModel);
        request.put("prompt", prompt);
        request.put("stream", false);

        try {
            Map<String, Object> response = restTemplate.postForObject(ollamaUrl, request, Map.class);
            Map<String, String> result = new HashMap<>();
            result.put("response", (String) response.get("response"));
            return result;
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("response", "AI is currently unavailable.");
            return error;
        }
    }
}