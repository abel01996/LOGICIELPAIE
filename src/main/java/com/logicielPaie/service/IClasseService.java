package com.logicielPaie.service;

import com.logicielPaie.model.Classe;

import java.util.Collection;

public interface IClasseService {

    Classe saveClasse(Classe classe);

    Collection<Classe> getAllClasse();

    Classe updateClasse(Long id ,Classe classe);

  void deleteClasse(Long id);
}
