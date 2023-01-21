package com.logicielPaie.repository;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface DepartementRepository extends JpaRepository<Departement,Long> {

    Collection<Departement> findAllByAndIsDeletedIsFalseOrderByIdDesc();

    @Query("select d from Departement d where d.direction = :direction")
    List<Departement>listeDepartement(@Param("direction") Long direction);

   Collection<Departement> findByDirection(Direction direction);
}
