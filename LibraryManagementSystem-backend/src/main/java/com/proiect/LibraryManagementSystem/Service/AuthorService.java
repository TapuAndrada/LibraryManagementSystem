package com.proiect.LibraryManagementSystem.Service;
import com.proiect.LibraryManagementSystem.Repository.AuthorRepository;
import com.proiect.LibraryManagementSystem.model.Author;
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

public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    public Author getAuthorById(int id) {
        Optional<Author> optionalAuthor= authorRepository.findById(id);
        if (optionalAuthor.isPresent()) {
            return optionalAuthor.get();
        } else {
            throw new RuntimeException("Author with id " + id + " not found");
        }
    }

    public Author addAuthor(Author author) {
        if (author.getBooks() != null) {
            author.getBooks().forEach(book -> book.setAuthor(author));
        }
        return authorRepository.save(author);
    }
    public Author updateAuthor(int id, Author updateAuthor) {
        Author author = getAuthorById(id);
        if (updateAuthor.getBooks() != null) {
            updateAuthor.getBooks().forEach(book -> book.setAuthor(author));
            author.setBooks(updateAuthor.getBooks());
        }
        return authorRepository.save(author);
    }

    public void deleteAuthor(int id) {
        Author author = getAuthorById(id);
        authorRepository.delete(author);
    }
}
