package com.example.My.app.user;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    ArrayList<User> users;

    public UserService(){
        users = new ArrayList<>(List.of(
                new User(1L,
                        "Tizio",
                        "Tizione",
                        "tizio@gmail.com",
                        23,
                        LocalDate.of(2000, Month.JANUARY, 5)),

                new User(2L,
                        "Paola",
                        "Paolina",
                        "paola@gmail.com",
                        21,
                        LocalDate.of(2000, Month.JANUARY, 5)),

                new User(3L,
                        "Caio",
                        "Caione",
                        "caione@gmail.com",
                        20,
                        LocalDate.of(2000, Month.JANUARY, 5))
        ));
    }

    public List<User> getUsers(){
        return users;
    }

    public User getUserById(Long id) {
        for (User user:users) {if (user.getId().equals(id)){return user;}}
        return new User(null,null,null,null,null,null);
    }
}
