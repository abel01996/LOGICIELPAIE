package com.logicielPaie.repository;

import com.logicielPaie.model.Employe;
import com.logicielPaie.model.Hierarchie;
import com.logicielPaie.model.Statut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface HierarchieRepository extends JpaRepository<Hierarchie,Long> {

    Collection<Hierarchie> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
