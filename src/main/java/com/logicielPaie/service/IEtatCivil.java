package com.logicielPaie.service;

import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.model.Hierarchie;

import java.util.Collection;

public interface IEtatCivil {

    EtatCivil saveEtatCivil(EtatCivil etatCivil);

    Collection<EtatCivil> getAllEtatCivil();

    EtatCivil updateEtatCivil(Long id ,EtatCivil etatCivil);

    void deleteEtatCivil(Long id);
}
