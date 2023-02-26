package com.logicielPaie.service;

import com.logicielPaie.model.FichePaie;

import java.util.Collection;

public interface IFichePaie {

    FichePaie savedFichePaie(FichePaie fichePaie);

    Collection<FichePaie>getAllFichePaie();

    FichePaie detailFichePaie(Long id, FichePaie fichePaie);

   void deleteFichePaie(Long id);
}
