package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.Quest;
import com.wrfrn.wakfu.repositories.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestService {

    @Autowired
    private QuestRepository questRepository;

    public List<Quest> findAll() {
        return questRepository.findAll();
    }

    public Optional<Quest> findById(Integer id) {
        return questRepository.findById(id);
    }

    public Quest save(Quest quest) {
        return questRepository.save(quest);
    }

    public void deleteById(Integer id) {
        questRepository.deleteById(id);
    }
}
