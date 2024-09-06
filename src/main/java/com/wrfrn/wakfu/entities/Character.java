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
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "character_id")
    private Integer characterId;

    @Column(name = "character_name", nullable = false)
    private String characterName;

    @Column(name = "character_lvl", nullable = false)
    private Integer characterLvl;

    @Column(name= "coffres")
    private Integer chests;

    @ManyToOne
    @JoinColumn(name = "class_id", nullable = false)
    private Class classe;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "character")
    private Set<CharacterItem> characterItems;

    @OneToMany(mappedBy = "character")
    private Set<CharacterQuest> characterQuests;
}
