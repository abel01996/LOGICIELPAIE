package com.logicielPaie.repository;

import com.logicielPaie.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface DirectionRepository extends JpaRepository<Direction,Long> {

    Collection<Direction>findAllByAndIsDeletedIsFalseOrderByIdDesc();

    @Override
    List<Direction> findAll();
}
