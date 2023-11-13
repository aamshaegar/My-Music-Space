package com.example.My.app.user;
import com.example.My.app.utilities.Encode;
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
        String passwordEncoded = Encode.encodeString(password);
        Optional<User> currentUser = userRepository.findUserByUsernameAndPassword(username,passwordEncoded);
        if(currentUser.isPresent()) {
            return ResponseEntity.ok().body(currentUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public User insertUser(User user){
        System.out.println("REST request to insert new User :" + user.getusername());
        String passwordEncoded = Encode.encodeString(user.getpassword());
        user.setpassword(passwordEncoded);
        return userRepository.save(user);
    }

    public ResponseEntity<User> updateUser(User user) {
        System.out.println("REST request to update User :" + user.getId());
        Optional<User> currentUser = userRepository.findById(user.getId());
        if(currentUser.isPresent()) {
            User result = userRepository.save(user);
            return ResponseEntity.ok().body(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<User> recoverUserPassword(String username, String email) {
        System.out.println("REST request recover password for the user :" + username);
        Optional<User> currentUser = userRepository.findUserByUsernameAndEmail(username,email);
        if(currentUser.isPresent()) {

            String randomPassword = Encode.generateRandomPassword(30);
            currentUser.get().setpassword(randomPassword);
            User result = userRepository.save(currentUser.get());

            return ResponseEntity.ok().body(result);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<User> recoverUserUsername(String email, String password) {
        System.out.println("REST request recover username by email:" + email);

        String passwordEncoded = Encode.encodeString(password);
        Optional<User> currentUser = userRepository.findUserByEmailAndPassword(email,passwordEncoded);
        if(currentUser.isPresent()) {

            String randomUsername = Encode.generateRandomPassword(30);
            currentUser.get().setusername(randomUsername);
            User result = userRepository.save(currentUser.get());

            return ResponseEntity.ok().body(result);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
