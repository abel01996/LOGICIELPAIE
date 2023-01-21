package com.logicielPaie.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "corps")

public class Corps  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    @Column(name ="nomCorps" ,length = 250)
    private String nomCorps;
    private  boolean isDeleted = false;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JsonIgnore
//    @JoinColumn(name = "echelon_id",nullable = false)
//    private Echelon echelon;

  @OneToMany(fetch = FetchType.EAGER,mappedBy = "corps")
   @com.fasterxml.jackson.annotation.JsonIgnore
    private Collection<Contrat>contrat;


}
