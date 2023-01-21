package com.logicielPaie.repository;

import com.logicielPaie.model.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface SalaireRepository extends JpaRepository<Salaire,Long> {
    Collection<Salaire> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
