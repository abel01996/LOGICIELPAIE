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
@Table(name = "banque")

public class Banque  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String nomBanque;
    private  boolean isDeleted = false;

    @OneToMany(mappedBy = "banque",fetch = FetchType.EAGER)
    @JsonIgnore
    private Collection<Agence>agence;
}
