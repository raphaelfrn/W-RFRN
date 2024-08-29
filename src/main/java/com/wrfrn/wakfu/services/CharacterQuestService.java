package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.CharacterQuest;
import com.wrfrn.wakfu.entities.CharacterQuestId;
import com.wrfrn.wakfu.repositories.CharacterQuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterQuestService {

    @Autowired
    private CharacterQuestRepository characterQuestRepository;

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
}
