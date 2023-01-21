package com.logicielPaie.service;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.ContratInterface;

import java.util.Collection;

public interface IContratService {

    Contrat saveContrat( Contrat contrat);

    Collection<Contrat> getAllContrat();

    ContratInterface getContratInterface(String matricule);

    Contrat updateContrat(Long id ,Contrat contrat);

    void deleteContrat(Long id);
}
