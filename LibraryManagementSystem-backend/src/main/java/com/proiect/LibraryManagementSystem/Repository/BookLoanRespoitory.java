package com.proiect.LibraryManagementSystem.Repository;
import com.proiect.LibraryManagementSystem.model.BookLoan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookLoanRespoitory extends JpaRepository<BookLoan,Integer> {
}
