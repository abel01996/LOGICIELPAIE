package com.logicielPaie.service;

import com.logicielPaie.model.Enfant;
import com.logicielPaie.model.Epouse;
import com.logicielPaie.repository.EnfantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class EnfantServiceImpl implements IEnfantService{

    private final EnfantRepository enfantRepository;
    @Override
    public Enfant saveEnfant(Enfant enfant) {
        return enfantRepository.save(enfant);
    }

    @Override
    public Collection<Enfant> getAllEnfant() {
        return enfantRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Enfant updateEnfant(Long id, Enfant enfant) {

        Enfant updateEnfant = getAllEnfantById(id);
        updateEnfant.setNom(enfant.getNom());
        updateEnfant.setPrenom(enfant.getPrenom());
        updateEnfant.setDateNaissance(enfant.getDateNaissance());
        updateEnfant.setLieuNaiss(enfant.getLieuNaiss());
        updateEnfant.setNumeroRegistre(enfant.getNumeroRegistre());

        return enfantRepository.save(updateEnfant);
    }

    @Override
    public void deleteEnfant(Long id) {

        Enfant delete = getAllEnfantById(id);
        delete.setDeleted(true);
        enfantRepository.save(delete);

    }
   private Enfant getAllEnfantById(Long id){
       Enfant existing = enfantRepository.findById(id).
                orElseThrow(()->new RuntimeException("l'epouse que vous rechercher n'existe pas"));
        return existing;
}
}
