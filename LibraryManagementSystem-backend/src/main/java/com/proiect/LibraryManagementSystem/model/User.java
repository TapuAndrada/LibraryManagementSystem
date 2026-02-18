    package com.proiect.LibraryManagementSystem.model;
    import com.fasterxml.jackson.annotation.JsonManagedReference;
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    import java.util.List;

    @Entity
    @Table(name = "users")
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        private String username;
        private String email;
        private String password;
        private String address;

        @Enumerated(EnumType.STRING)
        private UserRole role;

        @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
       // @JsonManagedReference(value = "user_loan")
        private List<BookLoan> loans;
    }
