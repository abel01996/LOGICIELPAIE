package com.logicielPaie.repository;

import com.logicielPaie.model.Corps;
import com.logicielPaie.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface CorpsRepository  extends JpaRepository<Corps,Long> {

    Collection<Corps> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
