package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rubriqueFiche")
@Entity
public class RubriqueFiche implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codeFiche;
    private  String rubriqueFiche;
    private  String montantFiche;
    private  boolean isDeleted = false;
    @ManyToOne
    @JoinColumn(name = "employe_id")
    private Employe employe;
}
