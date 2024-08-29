package com.wrfrn.wakfu.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "quests")
public class Quest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quest_id")
    private Integer questId;

    @Column(name = "quest_name", nullable = false)
    private String questName;

    @Column(name = "quest_description", nullable = false)
    private String questDescription;

    @Column(name = "quest_type", nullable = false)
    private String questType;

    @OneToMany(mappedBy = "quest")
    private Set<CharacterQuest> characterQuests;

}