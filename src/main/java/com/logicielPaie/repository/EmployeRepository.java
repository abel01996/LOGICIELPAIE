package com.logicielPaie.repository;

import com.logicielPaie.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.awt.*;
import java.util.Collection;
import java.util.List;

public interface EmployeRepository extends JpaRepository<Employe,Long> {

    Collection<Employe> findAllByAndIsDeletedIsFalseOrderByIdDesc();

//    Employe findEmployeByMatricule(String matricule);
    @Query("SELECT e.matricule FROM Employe e")
    List<String>findAllByMatricule();
}
