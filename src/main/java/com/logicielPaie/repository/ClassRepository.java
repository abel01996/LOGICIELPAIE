package com.logicielPaie.repository;

import com.logicielPaie.model.Classe;
import com.logicielPaie.model.Corps;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ClassRepository extends JpaRepository<Classe,Long> {

    Collection<Classe> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
