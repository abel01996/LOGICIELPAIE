package com.logicielPaie.service;

import com.logicielPaie.model.Employe;

import java.util.Collection;

public interface IEmployeService {
    Employe saveEmployer(Employe employe);

    Collection<Employe> getAllEmployer();

    Employe updateEmployer(Long id, Employe employer);

    void deleteEmployer(Long id);
}
