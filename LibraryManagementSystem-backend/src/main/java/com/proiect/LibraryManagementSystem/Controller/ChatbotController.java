package com.proiect.LibraryManagementSystem.Controller;

import com.proiect.LibraryManagementSystem.Service.ChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> payload) {
        String prompt = payload.get("prompt");
        return chatbotService.getAiResponse(prompt);
    }
}