package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
@Data
@Table(name = "contrat")
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Contrat implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.DATE)
    private Date embouche;
    @Temporal(TemporalType.DATE)
    private Date dateFin;
    private String numCompte;
    private String salaireBase;
    private String nbrPartFical;
    private String nbrPartImpot;
    private String nbrDenfantPrest;
    private String jourBase;
    private String nbreJourPresence;
    private boolean isDeleted = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "corp_id")
    @JsonIgnore
    private Corps corps;

    @ManyToOne
    @JoinColumn(name = "classe_id")
    @JsonIgnore
    private Classe classe;

    @ManyToOne
    @JoinColumn(name = "statut_id")
    @JsonIgnore
    private Statut statut;

    @ManyToOne
    @JoinColumn(name = "echelon_id")
    @JsonIgnore
    private Echelon echelon;

    @ManyToOne
    @JoinColumn(name = "hierarchie_id")
    @JsonIgnore
    private Hierarchie hierarchie;

    @ManyToOne
    @JoinColumn(name = "typeContrat_id")
    @JsonIgnore
    private TypeContrat typeContrat;

    @ManyToOne
    @JoinColumn(name = "employe_id")
    @JsonIgnore
    private Employe employe;

    @ManyToOne
    @JoinColumn(name = "agence_id")
    private Agence agence;

    @ManyToOne
    @JoinColumn(name = "typepaie_id")
    private Typepaie typepaie;

    @ManyToOne
    @JoinColumn(name = "typePaieRef_id")
    private TypePaieRef typePaieRef;

    @ManyToOne
    @JoinColumn(name = "modePaie_id")
    private ModePaie modePaie;


}