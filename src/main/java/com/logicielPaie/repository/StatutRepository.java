package com.logicielPaie.repository;

import com.logicielPaie.model.Employe;
import com.logicielPaie.model.Statut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface StatutRepository extends JpaRepository<Statut,Long> {

    Collection<Statut> findAllByAndIsDeletedIsFalseOrderByIdDesc();


}
