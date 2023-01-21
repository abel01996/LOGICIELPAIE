package com.logicielPaie.service;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import com.logicielPaie.repository.DepartementRepository;
import com.logicielPaie.repository.DirectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class DepartementServiceImpl implements IDepartementService {

    private final DepartementRepository departementRepository;
    private final DirectionRepository directionRepository;

    public Departement saveDep(Departement departement, Long idDirection) {
        Direction direction = directionRepository.findById(idDirection).get();
        departement.setDirection(direction);
        return  departementRepository.save(departement);
    }

    @Override
    public Collection<Departement> getAllDepartement() {
        return departementRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Collection<Departement> getDepartementid(Long id) {

        var direction = directionRepository.findById(id).get();
        return departementRepository.findByDirection(direction);
    }

    @Override
    public Departement updateDepartement(Long id, Departement departement) {
        Departement updateDepartement = getAllDepartementById(id);
        updateDepartement.setNomDepartement(departement.getNomDepartement());
        Direction direction = directionRepository.findById(departement.getDirection().getId()).get();
        updateDepartement.setDirection(direction);
        return departementRepository.save(updateDepartement) ;
    }
    @Override
    public void deleteDepartement(Long id) {
        Departement deleteDepartement = getAllDepartementById(id);
        deleteDepartement.setDeleted(true);
        departementRepository.save(deleteDepartement);

    }
    Departement getAllDepartementById(Long id){

        Departement existing = departementRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre departement n'existe pas"));
        return existing;
    }


}
