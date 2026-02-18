package com.proiect.LibraryManagementSystem.Service;
import com.proiect.LibraryManagementSystem.DTO.ExtendLoanRequest;
import com.proiect.LibraryManagementSystem.Repository.BookLoanRespoitory;
import com.proiect.LibraryManagementSystem.model.Book;
import com.proiect.LibraryManagementSystem.model.BookLoan;
import com.proiect.LibraryManagementSystem.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookLoanService {
    @Autowired
    private BookLoanRespoitory bookLoanRespoitory;
    @Autowired
    private UserService userService;
    @Autowired
    private BookService bookService;

    public List<BookLoan> getAllBookLoans() {
        return bookLoanRespoitory.findAll();
    }

    public BookLoan getLoanById(int id){
        Optional<BookLoan> optionalBookLoan = bookLoanRespoitory.findById(id);

        if (optionalBookLoan.isPresent()) {
            return optionalBookLoan.get();
        } else {
            throw new RuntimeException("The loan with id " + id + " not found");
        }
    }

    public BookLoan createBookLoan(int userId, int bookId) {
        User user=userService.getUserById(userId);
        Book book =bookService.getBookById(bookId);

        if (book.getQuantity() <= 0) {
            throw new RuntimeException("Book '" + book.getTitle() + "' is out of stock");
        }

        book.setQuantity(book.getQuantity() - 1);
        bookService.updateBook(bookId,book);

        BookLoan bookLoan = new BookLoan();
        bookLoan.setUser(user);
        bookLoan.setBook(book);
        bookLoan.setLoanDate(LocalDate.now());
        bookLoan.setReturnDate(LocalDate.now().plusDays(14));
        bookLoan.setReturned(false);

        return bookLoanRespoitory.save(bookLoan);
    }

    public BookLoan extendLoan(int id, ExtendLoanRequest returnDate){
        BookLoan bookLoan=getLoanById(id);
        if(!bookLoan.isReturned()){
            bookLoan.setReturnDate(returnDate.getReturnDate());
            return bookLoanRespoitory.save(bookLoan);
        }
        throw new RuntimeException("Loan cannot be extended");
    }
    public BookLoan returnBook(int id){
        BookLoan bookLoan=getLoanById(id);
        if(!bookLoan.isReturned()){
            bookLoan.setReturned(true);
            bookLoan.getBook().setQuantity(bookLoan.getBook().getQuantity() + 1);
            bookService.updateBook(bookLoan.getBook().getId(),bookLoan.getBook());
            return bookLoanRespoitory.save(bookLoan);
        }
        throw new RuntimeException("Book already returned");
    }


}
