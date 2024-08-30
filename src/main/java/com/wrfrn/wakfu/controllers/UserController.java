package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.UserDTO;
import com.wrfrn.wakfu.entities.User;
import com.wrfrn.wakfu.services.UserService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return GenericConverter.map(userService.findAll(), UserDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) {
        return userService.findById(id)
                .map(user -> ResponseEntity.ok(GenericConverter.map(user, UserDTO.class)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        User user = GenericConverter.map(userDTO, User.class);
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(GenericConverter.map(savedUser, UserDTO.class));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        if (userService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        User user = GenericConverter.map(userDTO, User.class);
        user.setUserId(id);
        User updatedUser = userService.save(user);
        return ResponseEntity.ok(GenericConverter.map(updatedUser, UserDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        if (userService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
