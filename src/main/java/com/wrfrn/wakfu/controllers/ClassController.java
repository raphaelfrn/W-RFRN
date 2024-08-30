package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.ClassDTO;
import com.wrfrn.wakfu.entities.Class;
import com.wrfrn.wakfu.services.ClassService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
public class ClassController {

    @Autowired
    private ClassService classService;

    @GetMapping
    public List<ClassDTO> getAllClasses() {
        return GenericConverter.map(classService.findAll(), ClassDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClassDTO> getClassById(@PathVariable Integer id) {
        return classService.findById(id)
                .map(clazz -> ResponseEntity.ok(GenericConverter.map(clazz, ClassDTO.class)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ClassDTO> createClass(@RequestBody ClassDTO classDTO) {
        Class clazz = GenericConverter.map(classDTO, Class.class);
        Class savedClass = classService.save(clazz);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(GenericConverter.map(savedClass, ClassDTO.class));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClassDTO> updateClass(@PathVariable Integer id, @RequestBody ClassDTO classDTO) {
        if (classService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Class clazz = GenericConverter.map(classDTO, Class.class);
        clazz.setClassId(id);
        Class updatedClass = classService.save(clazz);
        return ResponseEntity.ok(GenericConverter.map(updatedClass, ClassDTO.class));
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
