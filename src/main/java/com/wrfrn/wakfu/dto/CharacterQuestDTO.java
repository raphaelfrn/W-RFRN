package com.wrfrn.wakfu.dto;

import lombok.Data;

@Data
public class CharacterQuestDTO {
    private Integer characterId;
    private Integer questId;
    private Boolean completionStatus;
}
