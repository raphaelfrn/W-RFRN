package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.CharacterItem;
import com.wrfrn.wakfu.entities.CharacterItemId;
import com.wrfrn.wakfu.repositories.CharacterItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterItemService {

    @Autowired
    private CharacterItemRepository characterItemRepository;

    public List<CharacterItem> findAll() {
        return characterItemRepository.findAll();
    }

    public Optional<CharacterItem> findById(CharacterItemId id) {
        return characterItemRepository.findById(id);
    }

    public CharacterItem save(CharacterItem characterItem) {
        return characterItemRepository.save(characterItem);
    }

    public void deleteById(CharacterItemId id) {
        characterItemRepository.deleteById(id);
    }
}
