package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.Class;
import com.wrfrn.wakfu.repositories.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {

    @Autowired
    private ClassRepository classRepository;

    public List<Class> findAll() {
        return classRepository.findAll();
    }

    public Optional<Class> findById(Integer id) {
        return classRepository.findById(id);
    }

    public Class save(Class clazz) {
        return classRepository.save(clazz);
    }

    public void deleteById(Integer id) {
        classRepository.deleteById(id);
    }
}
