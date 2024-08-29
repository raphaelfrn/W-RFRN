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

}
