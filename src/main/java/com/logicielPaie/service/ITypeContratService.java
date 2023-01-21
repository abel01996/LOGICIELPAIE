package com.logicielPaie.service;

import com.logicielPaie.model.Statut;
import com.logicielPaie.model.TypeContrat;

import java.util.Collection;

public interface ITypeContratService {


    TypeContrat saveTypeContrat(TypeContrat typeContrat);

    Collection<TypeContrat> getAllTypeContrat();

    TypeContrat updateTypeContrat(Long id, TypeContrat typeContrat);

    void deleteTypeContrat(Long id);
}
