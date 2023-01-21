package com.logicielPaie.service;

import com.logicielPaie.model.Salaire;

import java.util.Collection;

public interface ISalaireService {

    Salaire saveSalaire(Salaire salaire);

    Collection<Salaire> getAllSalaire();

    Salaire updateSalaire(Long id , Salaire salaire);

    void deleteSalaire(Long id);
}
