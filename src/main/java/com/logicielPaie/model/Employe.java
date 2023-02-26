package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
@Entity
@Table(name = "employe")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Employe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,length = 20)
    private String matricule;
    private String nom;
    private String prenom;
    private String adresse;
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;
    @Column(nullable = false,length = 13)
    private  String cni;
    //sitution familliale
   private String nbrEpouse;
//    private String nbrEnfant;
   private String totalEnfant;
    @Temporal(TemporalType.DATE)
    private Date embouche;
    @Temporal(TemporalType.DATE)
    private Date dateFin;
    private boolean isDeleted = false;

    @ManyToOne()

    @JoinColumn(name = "etatCivil_id")
    @JsonIgnore
    private EtatCivil etatCivil;

//    @Transient
//    private Collection<Contrat> contrat;



}
