package com.example.gemnest.service;

import com.example.gemnest.entity.User;
import com.example.gemnest.dto.UserDTO;


import java.util.List;
import java.util.Optional;

public interface UserService {
    String save(UserDTO userDTO);
    String update(User user);

    List<User> getAll();

    Optional<User> getById(Integer id);

    Optional<User> getByEmail(String email);

    void deleteById(Integer id);

    boolean validateLogin(String username, String password);

//    Optional<User> getByUsername(String username);


    Optional<User> getByUserDTO(UserDTO userDTO);
}

