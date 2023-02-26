package com.logicielPaie.repository;

import com.logicielPaie.model.FichePaie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface FichePaieRepository extends JpaRepository<FichePaie,Long> {

    Collection<FichePaie>findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
