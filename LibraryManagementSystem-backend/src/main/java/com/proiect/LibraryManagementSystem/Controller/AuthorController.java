package com.proiect.LibraryManagementSystem.Controller;
import com.proiect.LibraryManagementSystem.Service.AuthorService;

import com.proiect.LibraryManagementSystem.model.Author;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuthorController {
    @Autowired
    private AuthorService authorService;

    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors(){
        return ResponseEntity.ok(authorService.getAllAuthors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable int id){
        return ResponseEntity.ok(authorService.getAuthorById(id));
    }

    @PostMapping
    public ResponseEntity<Author> createAuthor(@RequestBody Author author){
        return ResponseEntity.ok(authorService.addAuthor(author));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable int id,@RequestBody Author author){
        return ResponseEntity.ok(authorService.updateAuthor(id,author));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAuthor(@PathVariable int id){
           authorService.deleteAuthor(id);
        return ResponseEntity.ok("Author deleted successfully");
    }

}
