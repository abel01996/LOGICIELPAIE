package com.logicielPaie.service;

import com.logicielPaie.model.ModePaie;
import com.logicielPaie.model.Statut;

import java.util.Collection;

public interface IModePaieService {
    ModePaie saveModePaie(ModePaie modePaie);

    Collection<ModePaie> getAllModePaie();

    ModePaie updateModePaie(Long id, ModePaie modePaie);

    void deleteModePaie(Long id);
}
