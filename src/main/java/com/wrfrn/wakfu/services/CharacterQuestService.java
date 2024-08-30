package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.CharacterQuest;
import com.wrfrn.wakfu.entities.CharacterQuestId;
import com.wrfrn.wakfu.entities.Quest;
import com.wrfrn.wakfu.entities.Character;
import com.wrfrn.wakfu.repositories.CharacterQuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterQuestService {

    @Autowired
    private CharacterQuestRepository characterQuestRepository;
    @Autowired
    private CharacterService characterService; // Service pour obtenir les personnages
    @Autowired
    private QuestService questService; // Service pour obtenir les quêtes

    public List<CharacterQuest> findAll() {
        return characterQuestRepository.findAll();
    }

    public Optional<CharacterQuest> findById(CharacterQuestId id) {
        return characterQuestRepository.findById(id);
    }

    public CharacterQuest save(CharacterQuest characterQuest) {
        return characterQuestRepository.save(characterQuest);
    }

    public void deleteById(CharacterQuestId id) {
        characterQuestRepository.deleteById(id);
    }

    public void toggleCompletionStatus(Integer characterId, Integer questId, Boolean newStatus) {
       Character character = characterService.findById(characterId)
                .orElseThrow(() -> new RuntimeException("Character not found"));
        Quest quest = questService.findById(questId)
                .orElseThrow(() -> new RuntimeException("Quest not found"));

        CharacterQuestId id = new CharacterQuestId(character, quest);
        CharacterQuest characterQuest = characterQuestRepository.findById(id)
                .orElseGet(() -> {
                    CharacterQuest newCharacterQuest = new CharacterQuest();
                    newCharacterQuest.setId(id);
                    return newCharacterQuest;
                });

        characterQuest.setCompletionStatus(newStatus);
        characterQuestRepository.save(characterQuest);
    }

}
