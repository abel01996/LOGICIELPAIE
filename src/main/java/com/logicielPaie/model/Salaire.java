package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "compte")
public class Salaire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    private String numCompte;
//    private String salaireBase;
    private  boolean isDeleted = false;

    // salaire element
//    @ManyToOne
//    @JoinColumn(name = "agence_id")
//    private Agence agence;
//
//    @ManyToOne
//    @JoinColumn(name = "typepaie_id")
//    private Typepaie typepaie;
//
//    @ManyToOne
//    @JoinColumn(name = "typePaieRef_id")
//    private TypePaieRef typePaieRef;
//
//    @ManyToOne
//    @JoinColumn(name = "modePaie_id")
//    private ModePaie modePaie;
}
