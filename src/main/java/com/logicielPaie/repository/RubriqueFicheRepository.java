package com.logicielPaie.repository;

import com.logicielPaie.model.RubriqueFiche;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;
import java.util.Collection;
import java.util.List;

public interface RubriqueFicheRepository extends JpaRepository<RubriqueFiche,Long> {

    List<RubriqueFiche> findAllByAndIsDeletedIsFalseOrderByIdAsc();
    Collection<RubriqueFiche>findAllByOrderByIdAsc();
}
