package com.logicielPaie.service;

import com.logicielPaie.model.Agence;
import com.logicielPaie.model.Classe;

import java.util.Collection;

public interface IAgenceService {
    Agence saveAgence(Agence agence ,Long id);

    Collection<Agence> getAllAgence();

    Agence updateAgence(Long id ,Agence agence);

  void deleteAgence(Long id);
}
