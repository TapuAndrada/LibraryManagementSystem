package com.proiect.LibraryManagementSystem.Service;
import com.proiect.LibraryManagementSystem.Repository.BookRepository;
import com.proiect.LibraryManagementSystem.model.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAllActiveBooks();
    }

    public Book getBookById(int id) {
        Optional<Book> optionalBook = bookRepository.findById(id);

        if (optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            throw new RuntimeException("Book with id " + id + " not found");
        }
    }

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public Book updateBook(int id,Book updatedBook){
        Book book = getBookById(id);
            if(updatedBook.getQuantity()!=null){
                book.setQuantity(updatedBook.getQuantity());
            }
            if(updatedBook.getLoans()!=null){
                book.setLoans(updatedBook.getLoans());
            }
            return bookRepository.save(book);
    }

    public void deleteBook(int id) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setActive(false);
        bookRepository.save(book);
    }

    public List<Book> getTop3Books() {
        return bookRepository.findTop3MostBorrowedBooks();
    }

}
