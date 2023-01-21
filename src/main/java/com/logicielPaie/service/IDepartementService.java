package com.logicielPaie.service;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import com.logicielPaie.model.Echelon;

import java.util.Collection;

public interface IDepartementService {

   Departement saveDep( Departement departement , Long idDirection);

    Collection<Departement> getAllDepartement();
    Collection<Departement> getDepartementid(Long id);

//    Departement updateDepartement( , Departement departement,Long idDirection);

//    Departement updateDepartement(Long id , Departement departement, Long idDirection);

    Departement updateDepartement(Long id, Departement departement);

    void deleteDepartement(Long id);



}
