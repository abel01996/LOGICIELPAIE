package com.logicielPaie.repository;

import com.logicielPaie.model.TypeContrat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface TypeContratRepository extends JpaRepository<TypeContrat,Long> {

    Collection<TypeContrat>findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
