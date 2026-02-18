package com.proiect.LibraryManagementSystem.Controller;

import com.proiect.LibraryManagementSystem.DTO.ExtendLoanRequest;
import com.proiect.LibraryManagementSystem.Service.BookLoanService;

import com.proiect.LibraryManagementSystem.model.BookLoan;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/bookLoans")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class BookLoanController {
    @Autowired
    private BookLoanService bookLoanService;

    @GetMapping
    public ResponseEntity<List<BookLoan>> getAllLoans(){
        return ResponseEntity.ok(bookLoanService.getAllBookLoans());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookLoan> getLoanById(@PathVariable int id){
        return ResponseEntity.ok(bookLoanService.getLoanById(id));
    }

    @PostMapping("/{userId}/{bookId}")
    public ResponseEntity<BookLoan> createLoan(@PathVariable int userId, @PathVariable int bookId){
        return ResponseEntity.ok(bookLoanService.createBookLoan(userId,bookId));
    }

    @PutMapping("/extend/{id}")
    public ResponseEntity<BookLoan> extendLoan(@PathVariable int id, @RequestBody ExtendLoanRequest returnDate){
        return ResponseEntity.ok(bookLoanService.extendLoan(id,returnDate));
    }

    @PutMapping("/return/{id}")
    public ResponseEntity<BookLoan> returnBook(@PathVariable int id){
        return ResponseEntity.ok(bookLoanService.returnBook(id));
    }
}
