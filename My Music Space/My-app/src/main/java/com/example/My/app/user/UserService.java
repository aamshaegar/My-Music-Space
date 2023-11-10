package com.example.My.app.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){this.userRepository = userRepository;}
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    public User getUserUsernameAndPassword(String username, String password) {
        return (User) userRepository.findUserByUsernameAndPassword(username,password);
    }
}
