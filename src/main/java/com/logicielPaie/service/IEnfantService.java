package com.logicielPaie.service;

import com.logicielPaie.model.Enfant;
import com.logicielPaie.model.Epouse;

import java.util.Collection;

public interface IEnfantService {
    Enfant saveEnfant(Enfant enfant);

    Collection<Enfant> getAllEnfant();

    Enfant updateEnfant(Long id ,Enfant enfant);

    void deleteEnfant(Long id);
}
