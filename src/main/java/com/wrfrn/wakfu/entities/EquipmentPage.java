package com.wrfrn.wakfu.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "equipmentpages")
public class EquipmentPage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equipment_page_id")
    private Integer equipmentPageId;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    @Column(name = "level", nullable = false)
    private Integer level;

    @Column(name = "items_list", nullable = false)
    private String itemsList;

}
