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
@Table(name = "classes")
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private Integer classId;

    @Column(name = "class_name", nullable = false)
    private String className;

    @Column(name = "class_icon")
    private String classIcon;

    @Column(name = "class_full_art")
    private String classFullArt;

    @OneToMany(mappedBy = "clazz")
    private Set<Character> characters;

}