package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.entities.Quest;
import com.wrfrn.wakfu.services.QuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/quests")
public class QuestController {

    @Autowired
    private QuestService questService;

    @GetMapping
    public List<Quest> getAllQuests() {
        return questService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quest> getQuestById(@PathVariable Integer id) {
        Optional<Quest> quest = questService.findById(id);
        return quest.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Quest> createQuest(@RequestBody Quest quest) {
        Quest savedQuest = questService.save(quest);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedQuest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quest> updateQuest(@PathVariable Integer id, @RequestBody Quest quest) {
        if (questService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        quest.setQuestId(id);
        Quest updatedQuest = questService.save(quest);
        return ResponseEntity.ok(updatedQuest);
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
