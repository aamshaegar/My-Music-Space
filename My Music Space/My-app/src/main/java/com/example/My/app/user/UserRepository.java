package com.example.My.app.user;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

// Riceve 2 attributi: il primo è la classe che stiamo mappando e il secondo è l'id Long
    public interface UserRepository extends CrudRepository<User,Long> {

    // Non dobbiamo implementare nulla
    // fa tutto spring con le annotation

    User findUserByUsernameAndPassword(String username, String password);

}
