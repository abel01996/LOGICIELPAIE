package com.logicielPaie.service;

import com.logicielPaie.model.RubriqueFiche;
import com.logicielPaie.model.Salaire;

import java.util.Collection;
import java.util.List;

public interface IRubriqueService {

    RubriqueFiche saveRubrique(RubriqueFiche rubriqueFiche);

   List< RubriqueFiche> getAllRubriqueFiche();
    Collection< RubriqueFiche>getAllRubriqueFicheByIdAsc();

    RubriqueFiche updateRubriqueFiche(Long id ,  RubriqueFiche rubriqueFiche);

    void deleteRubriqueFiche(Long id);
}
