package com.logicielPaie.service;

import com.logicielPaie.model.Epouse;

import java.util.Collection;

public interface IEpouseService {

    Epouse saveEpouse(Epouse epouse);

   Collection<Epouse>  getAllEpouse();

   Epouse updateEpouse(Long id ,Epouse epouse);

   void deleteEpouse(Long id);
}
