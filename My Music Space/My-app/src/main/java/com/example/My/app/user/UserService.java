package com.example.My.app.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){this.userRepository = userRepository;}


    public List<User> findAllUsers(){
        System.out.println("REST request to find all users");
        return (List<User>) userRepository.findAll();
    }

    public ResponseEntity<User> findUserByUsernameAndPassword(String username, String password) {
        System.out.println("REST request to find User by username and password:");
        Optional<User> user = userRepository.findUserByUsernameAndPassword(username,password);
        if(user.isPresent()) {
            return ResponseEntity.ok().body(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public User insertUser(User user){
        System.out.println("REST request to insert new User :" + user);
        return userRepository.save(user);
    }

    public ResponseEntity<User> updateUser(User user) {
        System.out.println("REST request to update User :" + user);
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }
}
