package com.proiect.LibraryManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.proiect.LibraryManagementSystem.DTO.ExtendLoanRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;



@Entity
@Table(name = "bookLoans")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookLoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
   // @JsonBackReference(value = "user_loan")
    @JsonIgnoreProperties("loans")
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id")
    //@JsonBackReference(value = "book_loan")
    @JsonIgnoreProperties("loans")
    private Book book;

    @JsonFormat(pattern = "dd.MM.yyyy", timezone = "UTC")
    private LocalDate loanDate;

    @JsonFormat(pattern = "dd.MM.yyyy", timezone = "UTC")
    private LocalDate returnDate;

    private boolean returned;

}
