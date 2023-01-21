package com.logicielPaie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "agence")
public class Agence implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomAgence;
    private  boolean isDeleted = false;

 @ManyToOne(fetch = FetchType.LAZY)
 @JoinColumn(name = "banque_id",nullable = false)
 @JsonIgnore
    private Banque banque;


}
