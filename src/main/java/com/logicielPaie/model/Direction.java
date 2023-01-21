package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "direction")
public class Direction  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomDirection;
    private boolean isDeleted = false;

//    @JsonBackReference

   @OneToMany(fetch = FetchType.EAGER,mappedBy = "direction")
   @JsonIgnore
   private Collection<Departement>departement;


}
