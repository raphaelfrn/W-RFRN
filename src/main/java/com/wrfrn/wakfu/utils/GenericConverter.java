package com.wrfrn.wakfu.utils;

import com.wrfrn.wakfu.dto.*;
import com.wrfrn.wakfu.entities.Character;
import com.wrfrn.wakfu.entities.CharacterQuest;
import com.wrfrn.wakfu.entities.CharacterQuestId;
import org.springframework.beans.BeanUtils;
import java.util.List;

import java.util.stream.Collectors;

public class GenericConverter {

    // Convertir une entité en DTO avec gestion des propriétés imbriquées
    public static <S, D> D map(S source, Class<D> targetClass) {
        D target = null;
        try {
            target = targetClass.getDeclaredConstructor().newInstance();
            BeanUtils.copyProperties(source, target);

            // Convertir les propriétés imbriquées si nécessaire
            // Exemple pour CharacterDTO
            if (target instanceof CharacterDTO targetDTO && source instanceof Character sourceCharacter) {

                if (sourceCharacter.getClasse() != null) {
                    targetDTO.setClassDTO(map(sourceCharacter.getClasse(), ClassDTO.class));
                }
                if (sourceCharacter.getUser() != null) {
                    targetDTO.setUserDTO(map(sourceCharacter.getUser(), UserDTO.class));
                }
            }
            // Gestion des propriétés imbriquées pour CharacterQuest
            if (target instanceof CharacterQuestDTO targetDTO && source instanceof CharacterQuest sourceCharacterQuest) {

                // Utilisation des IDs pour les propriétés imbriquées
                if (sourceCharacterQuest.getId() != null) {
                    CharacterQuestId id = sourceCharacterQuest.getId();
                    if (id.getCharacter() != null) {
                        targetDTO.setCharacterId(id.getCharacter().getCharacterId());
                    }
                    if (id.getQuest() != null) {
                        targetDTO.setQuestId(id.getQuest().getQuestId());
                    }
                }

                targetDTO.setCompletionStatus(sourceCharacterQuest.getCompletionStatus());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return target;
    }

    // Convertir une liste d'entités en une liste de DTOs avec gestion des propriétés imbriquées
    public static <S, D> List<D> map(List<S> sourceList, Class<D> targetClass) {
        return sourceList.stream()
                .map(source -> map(source, targetClass))
                .collect(Collectors.toList());
    }
}

