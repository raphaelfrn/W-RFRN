package com.wrfrn.wakfu.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "characterquests")
public class CharacterQuest {

    @EmbeddedId
    private CharacterQuestId id;

    @Column(name = "completion_status", nullable = false)
    private Boolean completionStatus;

    @ManyToOne
    @MapsId("character")
    @JoinColumn(name = "character_id", insertable = false, updatable = false)
    private Character character;

    @ManyToOne
    @MapsId("quest")
    @JoinColumn(name = "quest_id", insertable = false, updatable = false)
    private Quest quest;

}
