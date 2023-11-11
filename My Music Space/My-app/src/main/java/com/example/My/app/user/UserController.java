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
    public UserController(UserService userService) {this.userService = userService;}


    @GetMapping("/list")
    public List<User> getUsers(){return userService.findAllUsers();}

    @GetMapping
    public ResponseEntity<User> getUser(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password){return userService.findUserByUsernameAndPassword(username, password);}

    @PostMapping
    public User insertUser(@Validated @RequestBody User user) {return userService.insertUser(user);}

    @PutMapping
    public ResponseEntity <User> updateUser(@Validated @RequestBody User user){return userService.updateUser(user);}
}


