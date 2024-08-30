package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.CharacterQuestDTO;
import com.wrfrn.wakfu.entities.CharacterQuest;
import com.wrfrn.wakfu.entities.CharacterQuestId;
import com.wrfrn.wakfu.services.CharacterQuestService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/character-quests")
public class CharacterQuestController {

    @Autowired
    private CharacterQuestService characterQuestService;

    @GetMapping
    public List<CharacterQuestDTO> getAllCharacterQuests() {
        List<CharacterQuest> characterQuests = characterQuestService.findAll();
        return GenericConverter.map(characterQuests, CharacterQuestDTO.class);
    }

    @PutMapping("/{characterId}/{questId}")
    public ResponseEntity<Void> updateCompletionStatus(
            @PathVariable Integer characterId,
            @PathVariable Integer questId,
            @RequestParam Boolean status) {
        characterQuestService.toggleCompletionStatus(characterId, questId, status);
        return ResponseEntity.noContent().build();
    }
}
