package com.logicielPaie.repository;

import com.logicielPaie.model.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface SalaireRepository extends JpaRepository<Salaire,Long> {
    Collection<Salaire> findAllByAndIsDeletedIsFalseOrderByIdDesc();
//    @Query("SELECT code FROM salaire WHERE code = code ")
//    Collection<Salaire>findAllSalaireByCode();
//
//    Long indice = null;
//    Long vpi = null;


}
