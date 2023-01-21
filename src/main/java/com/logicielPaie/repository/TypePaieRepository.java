package com.logicielPaie.repository;

import com.logicielPaie.model.Statut;
import com.logicielPaie.model.Typepaie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface TypePaieRepository extends JpaRepository<Typepaie,Long> {

    Collection<Typepaie> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
