package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "classe")
public class Classe  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomClasse;
    private String correspondance;
    private  boolean isDeleted = false;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "statut_id")
//    @JsonIgnore
//    private Statut statut;

    @OneToMany(mappedBy = "classe")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Collection<Contrat>contrat;


}
