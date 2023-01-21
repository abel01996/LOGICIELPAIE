package com.logicielPaie.service;

import com.logicielPaie.model.Corps;
import com.logicielPaie.model.Echelon;
import com.logicielPaie.model.Hierarchie;
import com.logicielPaie.repository.HierarchieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class HierarchieServiceImpl implements IHierarchieService {
    private final HierarchieRepository hierarchieRepository;

    @Override
    public Hierarchie saveHierarchie(Hierarchie hierarchie) {

        return hierarchieRepository.save(hierarchie);
    }

    @Override
    public Collection<Hierarchie> getAllHierarchie() {
        return hierarchieRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Hierarchie updateHierarchie(Long id, Hierarchie hierarchie) {
        Hierarchie updateHierarchie = getAllHierarchieById(id);
        updateHierarchie.setNomHierarchie(hierarchie.getNomHierarchie());
        updateHierarchie.setCorrespondance(hierarchie.getCorrespondance());
        return hierarchieRepository.save(updateHierarchie);
    }

    @Override
    public void deleteHierarchie(Long id) {
        Hierarchie deleteHierarchie = getAllHierarchieById(id);
        deleteHierarchie.setDeleted(true);
          hierarchieRepository.save(deleteHierarchie);
    }


    private Hierarchie getAllHierarchieById(Long id) {
        Hierarchie existinghierarchieRepository = hierarchieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre hierarchieRepository nexiste pas"));
        return existinghierarchieRepository;
    }

}
