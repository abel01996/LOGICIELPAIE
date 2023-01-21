package com.logicielPaie.repository;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.Enfant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface EnfantRepository extends JpaRepository<Enfant,Long> {
    Collection<Enfant> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
