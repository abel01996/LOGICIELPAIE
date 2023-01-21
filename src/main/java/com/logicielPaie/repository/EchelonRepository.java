package com.logicielPaie.repository;

import com.logicielPaie.model.Echelon;
import com.logicielPaie.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface EchelonRepository extends JpaRepository<Echelon,Long> {

    Collection<Echelon> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
