package com.logicielPaie.repository;

import com.logicielPaie.model.Agence;
import com.logicielPaie.model.Statut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface AgenceRepository extends JpaRepository<Agence,Long> {
    Collection<Agence> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
