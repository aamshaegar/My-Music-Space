package com.example.My.app.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/user")
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/debug/list")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping
    public ResponseEntity<User> findUser(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password) {
        return userService.findUserByUsernameAndPassword(username, password);
    }

    @PostMapping
    public void insertUser(@Validated @RequestBody User user) {
        userService.insertUser(user);
    }

    @PutMapping
    public void updateUser(@Validated @RequestBody User user) {
        userService.updateUser(user);
    }

    @PutMapping("/recoverUserPassword")
    public void recoverUserPassword(@RequestParam(name = "email") String email) {
        userService.recoverUserPassword(email);
    }

    @DeleteMapping
    public void deleteUser(@RequestParam(name = "id") Long id){
        userService.deleteUser(id);
    }
}


