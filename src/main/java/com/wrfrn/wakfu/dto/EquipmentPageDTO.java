package com.wrfrn.wakfu.dto;

import lombok.Data;

@Data
public class EquipmentPageDTO {
    private Integer equipmentPageId;
    private CharacterDTO characterDTO;
    private Integer level;
    private String itemsList;
}
