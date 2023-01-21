package com.logicielPaie.repository;

import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.model.Hierarchie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface EtatCivilRepository extends JpaRepository<EtatCivil,Long> {

    Collection<EtatCivil> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}

