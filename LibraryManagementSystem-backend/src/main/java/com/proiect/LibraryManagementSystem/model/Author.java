package com.proiect.LibraryManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "authors")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String nationality;

    @JsonFormat(pattern = "dd.MM.yyyy", timezone = "UTC")
    private LocalDate birthDate;

    @OneToMany(mappedBy = "author", cascade = {CascadeType.MERGE, CascadeType.PERSIST})
   // @JsonManagedReference
    @JsonIgnoreProperties("author")
    private List<Book> books;

}
