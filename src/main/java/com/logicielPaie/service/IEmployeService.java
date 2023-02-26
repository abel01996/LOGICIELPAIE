package com.logicielPaie.service;

import com.logicielPaie.model.Employe;

import java.util.Collection;
import java.util.List;

public interface IEmployeService {
    Employe saveEmployer(Employe employe);

    Collection<Employe> getAllEmployer();
    List<String> getMatricule();

    Employe updateEmployer(Long id, Employe employer);

    void deleteEmployer(Long id);
}
