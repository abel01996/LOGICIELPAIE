package com.logicielPaie.service;

import com.logicielPaie.model.*;
import com.logicielPaie.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@RequiredArgsConstructor
@Service
public class SalaireServiceImpl implements ISalaireService {
    private final SalaireRepository salaireRepository;
//    private final AgenceRepository agenceRepository;
//    private final TypePaieRepository typePaieRepository;
//    private final TypePaieRefRepository typePaieRefRepository;
//    private final ModePaieRespository modePaieRespository;
    @Override
    public Salaire saveSalaire(Salaire salaire) {
        return salaireRepository.save(salaire);
    }

    @Override
    public Collection<Salaire> getAllSalaire() {
        return salaireRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Salaire updateSalaire(Long id, Salaire salaire) {
        Salaire updateSalaire = getAllCompteById(id);
        updateSalaire.setCode(salaire.getCode());
        updateSalaire.setRubrique(salaire.getRubrique());
        updateSalaire.setNbre(salaire.getNbre());
        updateSalaire.setGain(salaire.getGain());
        updateSalaire.setUnite(salaire.getUnite());
        updateSalaire.setIndice(salaire.getIndice());
        updateSalaire.setVpi(salaire.getVpi());
        updateSalaire.setBase(salaire.getBase());
        updateSalaire.setTaux(salaire.getTaux());
        updateSalaire.setRetenue(salaire.getRetenue());
        updateSalaire.setPeriode(salaire.getPeriode());
        return salaireRepository.save(updateSalaire);
    }

    @Override
    public void deleteSalaire(Long id) {
        Salaire deleteSalaire = getAllCompteById(id);
        deleteSalaire.setDeleted(true);
        salaireRepository.save(deleteSalaire);

    }
    private Salaire getAllCompteById(Long id) {
        Salaire existingCompte =  salaireRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre Compte n'existe pas"));
        return existingCompte;
    }
}
