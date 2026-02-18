package com.proiect.LibraryManagementSystem.Repository;
import com.proiect.LibraryManagementSystem.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author,Integer> {
}
