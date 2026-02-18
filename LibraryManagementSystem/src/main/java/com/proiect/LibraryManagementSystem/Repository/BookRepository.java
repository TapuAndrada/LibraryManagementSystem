package com.proiect.LibraryManagementSystem.Repository;

import com.proiect.LibraryManagementSystem.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query("SELECT b FROM Book b WHERE b.active = true")
    List<Book> findAllActiveBooks();

    @Query("SELECT b FROM Book b " +
            "JOIN b.loans l " +
            "WHERE b.active = true " +
            "GROUP BY b.id, b.title, b.author, b.publicationDate, b.quantity, b.category, b.active " +
            "ORDER BY COUNT(l) DESC " +
            "LIMIT 3")
    List<Book> findTop3MostBorrowedBooks();

}