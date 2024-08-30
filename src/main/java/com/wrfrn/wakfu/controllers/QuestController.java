package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.QuestDTO;
import com.wrfrn.wakfu.entities.Quest;
import com.wrfrn.wakfu.services.QuestService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quests")
public class QuestController {

    @Autowired
    private QuestService questService;

    @GetMapping
    public List<QuestDTO> getAllQuests() {
        return GenericConverter.map(questService.findAll(), QuestDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestDTO> getQuestById(@PathVariable Integer id) {
        return questService.findById(id)
                .map(quest -> ResponseEntity.ok(GenericConverter.map(quest, QuestDTO.class)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<QuestDTO> createQuest(@RequestBody QuestDTO questDTO) {
        Quest quest = GenericConverter.map(questDTO, Quest.class);
        Quest savedQuest = questService.save(quest);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(GenericConverter.map(savedQuest, QuestDTO.class));
    }

    @PutMapping("/{id}")
    public ResponseEntity<QuestDTO> updateQuest(@PathVariable Integer id, @RequestBody QuestDTO questDTO) {
        if (questService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Quest quest = GenericConverter.map(questDTO, Quest.class);
        quest.setQuestId(id);
        Quest updatedQuest = questService.save(quest);
        return ResponseEntity.ok(GenericConverter.map(updatedQuest, QuestDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuest(@PathVariable Integer id) {
        if (questService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        questService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
