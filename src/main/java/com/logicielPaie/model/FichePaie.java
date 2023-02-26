package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Table(name = "fichePaie")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FichePaie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matricule;
    private String nom;
    private  String  prenom;
    private  String  etat_civil;
    @Temporal(TemporalType.DATE)
    private Date periode;
    private  String  type_paie;
    private  String  type_paie_ref;
    private String nbr_epouse;
    private String  total_enfant;
    private  String nbr_part_fical;
    private String nbr_part_impot;
    private String nom_corps;
    private String salaire_base;
    private String nbr_denfant_prest;
    private String nom_classe;
    private String nom_echelon;
    private String jour_base;
    private String nbre_jour_presence;
    private String statut_employe;
    private String nom_hierarchie;
    private String mode_paie;
    private String nom_banque;
    private String nom_agence;
    private String num_compte;
    private  boolean isDeleted = false;
}
