package com.example.My.app.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/user")
public class UserController {

    @Autowired
    private final UserService userService;

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
    public User insertUser(@Validated @RequestBody User user) {
        return userService.insertUser(user);
    }

    @PutMapping("/updateUserInfo")
    public ResponseEntity<User> updateUser(@Validated @RequestBody User user) {
        return userService.updateUser(user);
    }

    @PutMapping("/recoverUserPassword")
    public ResponseEntity <User> recoverUserPassword(@RequestParam(name = "username") String username, @RequestParam(name = "email") String email) {
        return userService.recoverUserPassword(username,email);
    }

    @PutMapping("/recoverUserUsername")
    public ResponseEntity <User> recoverUserUsername(@RequestBody String email, @RequestBody String password) {
        return userService.recoverUserUsername(email, password);
    }

}


