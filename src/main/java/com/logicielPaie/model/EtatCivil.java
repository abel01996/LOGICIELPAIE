package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.lang.invoke.StringConcatException;
import java.util.Collection;

@Entity
@Table(name = "etatCivil")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class EtatCivil  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String etatCivil;
    private  boolean isDeleted = false;

      @OneToMany(mappedBy = "etatCivil")
      @JsonIgnore
    private Collection<Employe>employe;

}
