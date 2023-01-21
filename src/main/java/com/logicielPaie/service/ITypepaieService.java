package com.logicielPaie.service;

import com.logicielPaie.model.Statut;
import com.logicielPaie.model.Typepaie;

import java.util.Collection;

public interface ITypepaieService {


    Typepaie saveTypepaie(Typepaie typepaie);

    Collection<Typepaie> getAllTypepaie();

    Typepaie updateTypepaie(Long id, Typepaie typepaie);

    void deleteTypepaie(Long id);
}
