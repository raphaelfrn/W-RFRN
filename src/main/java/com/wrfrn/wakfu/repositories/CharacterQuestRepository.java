package com.wrfrn.wakfu.repositories;

import com.wrfrn.wakfu.entities.CharacterQuest;
import com.wrfrn.wakfu.entities.CharacterQuestId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterQuestRepository extends JpaRepository<CharacterQuest, CharacterQuestId> {
}
