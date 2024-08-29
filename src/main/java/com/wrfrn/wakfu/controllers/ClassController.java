package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.entities.Class;
import com.wrfrn.wakfu.services.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/classes")
public class ClassController {

    @Autowired
    private ClassService classService;

    @GetMapping
    public List<Class> getAllClasses() {
        return classService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Class> getClassById(@PathVariable Integer id) {
        Optional<Class> clazz = classService.findById(id);
        return clazz.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Class> createClass(@RequestBody Class clazz) {
        Class savedClass = classService.save(clazz);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedClass);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Class> updateClass(@PathVariable Integer id, @RequestBody Class clazz) {
        if (classService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        clazz.setClassId(id);
        Class updatedClass = classService.save(clazz);
        return ResponseEntity.ok(updatedClass);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClass(@PathVariable Integer id) {
        if (classService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        classService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
