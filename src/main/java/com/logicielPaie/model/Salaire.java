package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "salaire")
public class Salaire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String rubrique;
    private String nbre;
    private String unite;
    private String indice;
    private String vpi;
    private String base;
    private String taux;//
    private String gain;
    private String retenue;
    @Temporal(TemporalType.DATE)
    private Date periode;

    private  boolean isDeleted = false;

    @ManyToOne
    @JoinColumn(name = "employe_id")
    private Employe employe;


}
