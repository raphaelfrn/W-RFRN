package com.wrfrn.wakfu.entities;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class CharacterItemId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    // hashCode, and equals


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CharacterItemId that = (CharacterItemId) o;
        return Objects.equals(character, that.character) && Objects.equals(item, that.item);
    }

    @Override
    public int hashCode() {
        return Objects.hash(character, item);
    }
}
