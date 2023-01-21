package com.logicielPaie.repository;

import com.logicielPaie.model.Employe;
import com.logicielPaie.model.Hierarchie;
import com.logicielPaie.model.ModePaie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ModePaieRespository extends JpaRepository<ModePaie,Long> {
    Collection<ModePaie> findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
