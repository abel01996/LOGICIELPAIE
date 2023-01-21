package com.logicielPaie.service;

import com.logicielPaie.model.Employe;
import com.logicielPaie.model.Statut;

import java.util.Collection;

public interface IStatutService {

 Statut saveStatut(Statut statut);

    Collection<Statut> getAllStatut();

    Statut updateStatut(Long id, Statut statut);

    void deleteStatut(Long id);
}
