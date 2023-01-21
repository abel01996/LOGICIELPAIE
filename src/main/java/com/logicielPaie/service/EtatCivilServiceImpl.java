package com.logicielPaie.service;

import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.repository.EtatCivilRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class EtatCivilServiceImpl implements IEtatCivil{

    private final EtatCivilRepository etatCivilRepository;
    @Override
    public EtatCivil saveEtatCivil(EtatCivil etatCivil) {
        return etatCivilRepository.save(etatCivil);
    }

    @Override
    public Collection<EtatCivil> getAllEtatCivil() {
        return etatCivilRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public EtatCivil updateEtatCivil(Long id, EtatCivil etatCivil) {

        EtatCivil updateEtatatCivil = getAllByIdEtatatCivil(id);
        updateEtatatCivil.setEtatCivil(etatCivil.getEtatCivil());
        return  etatCivilRepository.save(updateEtatatCivil);
    }

    @Override
    public void deleteEtatCivil(Long id) {

        EtatCivil deleteEtatCivile = getAllByIdEtatatCivil(id);
        deleteEtatCivile.setDeleted(true);
        etatCivilRepository.save(deleteEtatCivile);
    }
    private  EtatCivil  getAllByIdEtatatCivil(Long id){

        EtatCivil existingEtatCivil = etatCivilRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre etat civil n'existe pas"));
        return existingEtatCivil;
    }
}
