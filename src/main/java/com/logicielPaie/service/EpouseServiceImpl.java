package com.logicielPaie.service;

import com.logicielPaie.model.Epouse;
import com.logicielPaie.repository.EpouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class EpouseServiceImpl  implements IEpouseService{

    private final EpouseRepository epouseRepository;

    @Override
    public Epouse saveEpouse(Epouse epouse) {
        return epouseRepository.save(epouse);
    }

    @Override
    public Collection<Epouse> getAllEpouse() {
        return epouseRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Epouse updateEpouse(Long id, Epouse epouse) {
        Epouse updateEpouse = getAllEpouseById(id);
        updateEpouse.setNom(epouse.getNom());
        updateEpouse.setPrenom(epouse.getPrenom());
        updateEpouse.setDateNaissance(epouse.getDateNaissance());
        updateEpouse.setProfession(epouse.getProfession());
        epouse.setMariage(epouse.getMariage());
        epouse.setTel(epouse.getTel());

        return  epouseRepository.save(updateEpouse);
    }

    @Override
    public void deleteEpouse(Long id) {

        Epouse  delETEEpouse = getAllEpouseById(id);
        delETEEpouse.setDeleted(true);
        epouseRepository.save(delETEEpouse);

    }
    private  Epouse getAllEpouseById(Long id){
        Epouse existing = epouseRepository.findById(id).
                orElseThrow(()->new RuntimeException("l'epouse que vous rechercher n'existe pas"));
        return existing;

    }
}
