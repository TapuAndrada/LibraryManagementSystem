package com.proiect.LibraryManagementSystem.Controller;

import com.proiect.LibraryManagementSystem.Service.BookService;

import com.proiect.LibraryManagementSystem.model.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")


public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks(){
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id){
        return ResponseEntity.ok(bookService.getBookById(id));
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book){
        return  ResponseEntity.ok(bookService.addBook(book));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id,@RequestBody Book book){
        return ResponseEntity.ok(bookService.updateBook(id,book));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable int id){
        bookService.deleteBook(id);
        return ResponseEntity.ok("Book deleted successfully");
    }

    @GetMapping("/top")
    public ResponseEntity<List<Book>> getTopBooks() {
        return ResponseEntity.ok(bookService.getTop3Books());
    }
}
