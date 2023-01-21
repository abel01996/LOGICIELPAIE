package com.logicielPaie.service;

import com.logicielPaie.model.Echelon;
import com.logicielPaie.model.Hierarchie;

import java.util.Collection;

public interface IHierarchieService {

   Hierarchie saveHierarchie(Hierarchie hierarchie);

    Collection<Hierarchie> getAllHierarchie();

    Hierarchie updateHierarchie(Long id ,Hierarchie hierarchie);

   void deleteHierarchie(Long id);
}
