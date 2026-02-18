package com.proiect.LibraryManagementSystem.Controller;

import com.proiect.LibraryManagementSystem.Service.UserService;
import com.proiect.LibraryManagementSystem.model.User;
import com.proiect.LibraryManagementSystem.DTO.LoginDTO;
import com.proiect.LibraryManagementSystem.DTO.SimpleAuthResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/users")
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.addUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<SimpleAuthResponse> loginUser(@RequestBody LoginDTO loginDTO){
       User user =userService.getUserByUsername(loginDTO.getUsername());
       if(user==null){
           return ResponseEntity
                   .status(HttpStatus.UNAUTHORIZED)
                   .body(new SimpleAuthResponse(0,"FAILURE", "Incorrect username!"));
       }
       if(user.getPassword() != null && loginDTO.getPassword().equals(user.getPassword())){
               return ResponseEntity.ok(new SimpleAuthResponse(user.getId(),"SUCCESS", "Authentication successful."));
       }else {
           return ResponseEntity
                   .status(HttpStatus.UNAUTHORIZED)
                   .body(new SimpleAuthResponse(0,"FAILURE", "Incorrect password."));
       }

    }


    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
