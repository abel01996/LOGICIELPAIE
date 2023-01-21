package com.logicielPaie.repository;

import com.logicielPaie.model.Banque;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface BanqueRepository extends JpaRepository<Banque,Long> {

    Collection<Banque>findAllByAndIsDeletedIsFalseOrderByIdDesc();
}
