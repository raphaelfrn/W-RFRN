package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.Character;
import com.wrfrn.wakfu.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;

    public List<Character> findAll() {
        return characterRepository.findAll();
    }

    public Optional<Character> findById(Integer id) {
        return characterRepository.findById(id);
    }

    public Character save(Character character) {
        return characterRepository.save(character);
    }

    public void deleteById(Integer id) {
        characterRepository.deleteById(id);
    }
}
