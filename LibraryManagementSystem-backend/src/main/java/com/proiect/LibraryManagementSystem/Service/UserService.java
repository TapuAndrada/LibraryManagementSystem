package com.proiect.LibraryManagementSystem.Service;
import com.proiect.LibraryManagementSystem.Repository.UserRepository;
import com.proiect.LibraryManagementSystem.model.User;
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
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            throw new RuntimeException("User with id " + id + " not found");
        }
    }
    public User getUserByUsername(String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(int id, User updateUser) {
        User user = getUserById(id);

        if (updateUser.getUsername() != null) {
            user.setUsername(updateUser.getUsername());
        }
        if (updateUser.getEmail() != null) {
            user.setEmail(updateUser.getEmail());
        }
        if (updateUser.getPassword() != null) {
            user.setPassword(updateUser.getPassword());
        }
        if (updateUser.getAddress() != null) {
            user.setAddress(updateUser.getAddress());
        }

        return userRepository.save(user);
    }


    public void deleteUser(int id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
}
