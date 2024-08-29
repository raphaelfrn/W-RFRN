package com.wrfrn.wakfu.repositories;

import com.wrfrn.wakfu.entities.CharacterItem;
import com.wrfrn.wakfu.entities.CharacterItemId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterItemRepository extends JpaRepository<CharacterItem, CharacterItemId> {
}
