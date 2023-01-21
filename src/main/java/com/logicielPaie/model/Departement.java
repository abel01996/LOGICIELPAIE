package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "departement")

public class  Departement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nomDepartement",nullable = false)
    private String nomDepartement;
    private boolean  isDeleted = false;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "direction_id" , nullable = false)
   @net.minidev.json.annotate.JsonIgnore
   private Direction direction;

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "departement")
   @com.fasterxml.jackson.annotation.JsonIgnore
   private Collection<Service>service;
}
