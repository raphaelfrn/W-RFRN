package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.CharacterDTO;
import com.wrfrn.wakfu.entities.Character;
import com.wrfrn.wakfu.services.CharacterService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    @GetMapping
    public List<CharacterDTO> getAllCharacters() {
        List<Character> characters = characterService.findAll();
        return GenericConverter.map(characters, CharacterDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacterDTO> getCharacterById(@PathVariable Integer id) {
        return characterService.findById(id)
                .map(character -> {
                    CharacterDTO dto = GenericConverter.map(character, CharacterDTO.class);
                    return ResponseEntity.ok(dto);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CharacterDTO> createCharacter(@RequestBody CharacterDTO characterDTO) {
        // Vérifiez si les données sont valides
        Character character = GenericConverter.map(characterDTO, Character.class);
        Character savedCharacter = characterService.save(character);
        CharacterDTO savedDTO = GenericConverter.map(savedCharacter, CharacterDTO.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CharacterDTO> updateCharacter(@PathVariable Integer id, @RequestBody CharacterDTO characterDTO) {
        if (characterService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Character character = GenericConverter.map(characterDTO, Character.class);
        character.setCharacterId(id);
        Character updatedCharacter = characterService.save(character);
        CharacterDTO updatedDTO = GenericConverter.map(updatedCharacter, CharacterDTO.class);
        return ResponseEntity.ok(updatedDTO);
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
