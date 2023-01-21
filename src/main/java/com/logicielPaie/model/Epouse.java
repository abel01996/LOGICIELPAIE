package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
@Table(name = "epouse")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Epouse implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;
    @Column(nullable = false,length = 250)
    private String profession;
    private String tel;
    @Temporal(TemporalType.DATE)
    private Date mariage;
    private boolean isDeleted = false;

    @ManyToOne
    @JoinColumn(name = "employe_id")
    private Employe employe;
}
