package com.example.My.app.user;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Long> {

        // Riceve 2 attributi: il primo è la classe che stiamo mappando e il secondo è l'id Long
        // Non dobbiamo implementare nulla
        // fa tutto spring con le annotation

    Optional<User> findUserByUsernameAndPassword(String username, String password);
    Optional<User> findUserByEmail(String email);

}
