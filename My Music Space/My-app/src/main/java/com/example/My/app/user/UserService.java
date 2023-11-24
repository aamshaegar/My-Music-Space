package com.example.My.app.user;
import com.example.My.app.utilities.Encode;
import jakarta.transaction.Transactional;
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
        return currentUser.map(user -> ResponseEntity.ok().body(user)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public void insertUser(User user){
        System.out.println("REST request to insert new User :" + user.getUsername());
        Optional<User> existingUser = userRepository.findUserByEmail(user.getEmail());
        if(existingUser.isPresent()){
            throw new IllegalStateException("Email is present yet!");
        }
        // Else, we encode the password and we store the user
        String passwordEncoded = Encode.encodeString(user.getPassword());
        user.setPassword(passwordEncoded);
        userRepository.save(user);
    }


    public void updateUser(User user) {
        System.out.println("PUT request to update User :" + user.getId());
        Optional<User> currentUser = userRepository.findById(user.getId());
        if(currentUser.isPresent()) {
            userRepository.save(user);
        } else {
            throw new IllegalStateException("User does not exists");
        }
    }


    public void recoverUserPassword(String email) {
        System.out.println("REST request recover password for the user :" + email);
        Optional<User> currentUser = userRepository.findUserByEmail(email);
        if(currentUser.isPresent()) {

            String randomPassword = Encode.generateRandomPassword(30);
            currentUser.get().setPassword(randomPassword);
            userRepository.save(currentUser.get());

        }else{
            throw new IllegalStateException("User does not exists");
        }
    }

    public void deleteUser(Long id) {
        System.out.println("DELETE request: delete user with id: " + id);
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isEmpty()){
            throw new IllegalStateException("User does not exist");
        }
        userRepository.deleteById(id);
    }
}
