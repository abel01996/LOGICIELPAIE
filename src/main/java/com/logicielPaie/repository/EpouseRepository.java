package com.logicielPaie.repository;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.Epouse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface EpouseRepository extends JpaRepository<Epouse,Long> {
    Collection<Epouse> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
