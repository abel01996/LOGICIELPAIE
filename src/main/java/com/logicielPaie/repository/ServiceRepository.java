package com.logicielPaie.repository;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import com.logicielPaie.model.Service;
import com.logicielPaie.model.Statut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ServiceRepository extends JpaRepository<Service,Long> {

    Collection<Service> findAllByAndIsDeletedIsFalseOrderByIdDesc();

    @Query("select s from Service s where s.departement= :departement")
    List<Service> listeService(@Param("departement") Long departement);

    Collection<Service> findByDepartement(Departement departement);
}
