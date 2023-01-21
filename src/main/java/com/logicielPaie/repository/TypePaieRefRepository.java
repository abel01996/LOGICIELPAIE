package com.logicielPaie.repository;

import com.logicielPaie.model.TypePaieRef;
import com.logicielPaie.model.Typepaie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface TypePaieRefRepository extends JpaRepository<TypePaieRef,Long> {

    Collection<TypePaieRef> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
