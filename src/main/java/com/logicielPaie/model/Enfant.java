package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
@Table(name = "enfant")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Enfant  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;
    @Column(nullable = false,length = 13)
    private  String lieuNaiss;
    private String numeroRegistre;
    private boolean isDeleted = false;
    @ManyToOne
    @JoinColumn(name = "employe_id")
    private Employe employe;

    @ManyToOne
    @JoinColumn(name = "epouse_id")
    private Epouse epouse;

}
