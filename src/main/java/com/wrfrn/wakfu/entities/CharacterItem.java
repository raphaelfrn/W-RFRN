package com.wrfrn.wakfu.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "characteritems")
public class CharacterItem {

    @EmbeddedId
    private CharacterItemId id;

    @Column(name = "acquisition_status", nullable = false)
    private Boolean acquisitionStatus;

    // Référence explicite à Character
    @ManyToOne
    @MapsId("character")  // Correspondance avec la clé composite
    @JoinColumn(name = "character_id", insertable = false, updatable = false)
    private Character character;

    @ManyToOne
    @MapsId("item")  // Correspondance avec la clé composite
    @JoinColumn(name = "item_id", insertable = false, updatable = false)
    private Item item;

}
