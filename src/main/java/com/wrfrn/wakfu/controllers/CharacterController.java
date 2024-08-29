package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.entities.Character;
import com.wrfrn.wakfu.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    @GetMapping
    public List<Character> getAllCharacters() {
        return characterService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> getCharacterById(@PathVariable Integer id) {
        Optional<Character> character = characterService.findById(id);
        return character.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Character> createCharacter(@RequestBody Character character) {
        Character savedCharacter = characterService.save(character);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCharacter);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Character> updateCharacter(@PathVariable Integer id, @RequestBody Character character) {
        if (characterService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        character.setCharacterId(id);
        Character updatedCharacter = characterService.save(character);
        return ResponseEntity.ok(updatedCharacter);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCharacter(@PathVariable Integer id) {
        if (characterService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        characterService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
