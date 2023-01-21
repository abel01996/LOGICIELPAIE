package com.logicielPaie.service;

import com.logicielPaie.model.Echelon;

import java.util.Collection;

public interface IEchelonService {

   Echelon saveEchelon(Echelon echelon);

    Collection< Echelon> getAllEchelon();

    Echelon updateEchelon(Long id ,Echelon echelon);

    void deleteEchelon(Long id);
}
