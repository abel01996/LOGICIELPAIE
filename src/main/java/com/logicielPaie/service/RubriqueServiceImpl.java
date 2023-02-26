package com.logicielPaie.service;

import com.logicielPaie.model.RubriqueFiche;
import com.logicielPaie.model.Salaire;
import com.logicielPaie.repository.RubriqueFicheRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RubriqueServiceImpl implements IRubriqueService{
    private final RubriqueFicheRepository rubriqueFicheRepository;
    @Override
    public RubriqueFiche saveRubrique(RubriqueFiche rubriqueFiche) {
        return rubriqueFicheRepository.save(rubriqueFiche);
    }

    @Override
    public List<RubriqueFiche> getAllRubriqueFiche() {
        return rubriqueFicheRepository.findAllByAndIsDeletedIsFalseOrderByIdAsc();
    }

    @Override
    public Collection<RubriqueFiche> getAllRubriqueFicheByIdAsc() {
        return rubriqueFicheRepository.findAllByOrderByIdAsc();
    }

    @Override
    public RubriqueFiche updateRubriqueFiche(Long id, RubriqueFiche rubriqueFiche) {

        RubriqueFiche updateRubriqueFiche = getAllRubriqueFicheById(id);
        updateRubriqueFiche.setCodeFiche(rubriqueFiche.getCodeFiche());
        updateRubriqueFiche.setRubriqueFiche(rubriqueFiche.getRubriqueFiche());
        updateRubriqueFiche.setMontantFiche(rubriqueFiche.getMontantFiche());
//        updateRubriqueFiche.setPeriode(rubriqueFiche.getPeriode());
        return null;
    }

    @Override
    public void deleteRubriqueFiche(Long id) {
        RubriqueFiche deleteRubriqueFiche = getAllRubriqueFicheById(id);
        deleteRubriqueFiche.setDeleted(true);
       rubriqueFicheRepository.save(deleteRubriqueFiche);


    }
    private  RubriqueFiche getAllRubriqueFicheById(Long id) {
        RubriqueFiche existingCompte =  rubriqueFicheRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre  RubriqueFiche n'existe pas"));
        return existingCompte;
    }

}
