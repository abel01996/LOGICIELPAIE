package com.logicielPaie.repository;

import com.logicielPaie.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface EmployeRepository extends JpaRepository<Employe,Long> {

    Collection<Employe> findAllByAndIsDeletedIsFalseOrderByIdDesc();

//    Employe findEmployeByMatricule(String matricule);
}
