package com.proiect.LibraryManagementSystem.model;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "books")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;

    @ManyToOne
    @JoinColumn(name = "author_id")
   // @JsonBackReference
    @JsonIgnoreProperties("books")
    private Author author;

    @JsonFormat(pattern = "dd.MM.yyyy", timezone = "UTC")
    private LocalDate publicationDate;

    private Integer quantity;

    private String category;

    private boolean active = true;

    @OneToMany(mappedBy = "book",cascade = CascadeType.ALL)
    @JsonIgnore
    //@JsonManagedReference(value = "book_loan")
    private List<BookLoan> loans;
}
