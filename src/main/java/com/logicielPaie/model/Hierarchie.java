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
@Table(name = "hierarchie")

public class Hierarchie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomHierarchie;
    @Column(nullable = false,length = 250)
    private String correspondance;
    private  boolean isDeleted = false;
//    @OneToMany(fetch = FetchType.EAGER,mappedBy = "hierarchie")
//    @JsonIgnore
//    private Collection<Echelon>echelon;

    @OneToMany(mappedBy = "hierarchie")
    @JsonIgnore
    private Collection<Contrat>contrat;


}
