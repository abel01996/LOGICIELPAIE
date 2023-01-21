package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "echelon")
public class Echelon  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomEchelon;
    private String correspondances;
    private  boolean isDeleted = false;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "hierarchie_id", nullable = false)
//    @JsonIgnore
//    private Hierarchie hierarchie;
//
//   @OneToMany(mappedBy = "echelon",fetch = FetchType.EAGER)
//   @com.fasterxml.jackson.annotation.JsonIgnore
//    private Collection<Corps>corps;

    @OneToMany(mappedBy = "echelon")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Collection<Contrat>contrat;


}
