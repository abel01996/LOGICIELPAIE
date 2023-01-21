package com.logicielPaie.service;

import com.logicielPaie.model.Agence;
import com.logicielPaie.model.Banque;
import com.logicielPaie.repository.AgenceRepository;
import com.logicielPaie.repository.BanqueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@RequiredArgsConstructor
@Service
public class AgenceServiceImpl  implements IAgenceService{

    private  final AgenceRepository agenceRepository;
    private final BanqueRepository banqueRepository;
    @Override
    public Agence saveAgence(Agence agence,Long id) {
        Banque banque = banqueRepository.findById(id).get();
        agence.setBanque(banque);
        return agenceRepository.save(agence);
    }

    @Override
    public Collection<Agence> getAllAgence() {
        return agenceRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Agence updateAgence(Long id, Agence agence) {
        Agence updateAgence = getAllAgenceById(id);
        updateAgence.setNomAgence(agence.getNomAgence());
        Banque banque = banqueRepository.findById(agence.getBanque().getId()).get();
        updateAgence.setBanque(banque);
        return agenceRepository.save(updateAgence);
    }

    @Override
    public void deleteAgence(Long id) {
        Agence deleteAgence= getAllAgenceById(id);
        deleteAgence.setDeleted(true);
        agenceRepository.save(deleteAgence);
    }
    private Agence getAllAgenceById(Long id) {
        Agence existingCorps = agenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre Agence nexiste pas"));
        return existingCorps;
    }
}
