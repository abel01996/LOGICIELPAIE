package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "statut")
public class Statut  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String statutEmploye;
    private String correspondance;
    private  boolean isDeleted = false;

//    @OneToMany(fetch = FetchType.EAGER,mappedBy = "statut")
//    @JsonIgnore
//    private Collection<Classe>classe;

    @OneToMany(mappedBy = "statut")
    @JsonIgnore
    private Collection<Contrat>contrat;


}
