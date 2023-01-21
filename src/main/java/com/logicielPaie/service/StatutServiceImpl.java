package com.logicielPaie.service;

import com.logicielPaie.model.Statut;
import com.logicielPaie.repository.StatutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class StatutServiceImpl implements IStatutService{
    private  final StatutRepository statutRepository;
    @Override
    public Statut saveStatut(Statut statut) {
        return statutRepository.save(statut);
    }

    @Override
    public Collection<Statut> getAllStatut() {
        return statutRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Statut updateStatut(Long id, Statut statut) {

        Statut updateStatut = getAllStatutById(id);
        updateStatut.setCode(statut.getCode());
        updateStatut.setStatutEmploye(statut.getStatutEmploye());
        updateStatut.setCorrespondance(statut.getCorrespondance());
        return statutRepository.save(updateStatut);
    }

    @Override
    public void deleteStatut(Long id) {
      Statut deleteStatut = getAllStatutById(id);
      deleteStatut.setDeleted(true);
      statutRepository.save(deleteStatut);
    }
    private Statut getAllStatutById(Long id){

        Statut existingStatut = statutRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre statut n'existe pas"));
        return existingStatut;
    }
}
