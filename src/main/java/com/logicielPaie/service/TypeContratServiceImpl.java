package com.logicielPaie.service;

import com.logicielPaie.model.Banque;
import com.logicielPaie.model.TypeContrat;
import com.logicielPaie.repository.TypeContratRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class TypeContratServiceImpl implements ITypeContratService{

    private final TypeContratRepository typeContratRepository;
    @Override
    public TypeContrat saveTypeContrat(TypeContrat typeContrat) {
        return typeContratRepository.save(typeContrat);
    }

    @Override
    public Collection<TypeContrat> getAllTypeContrat() {
        return typeContratRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public TypeContrat updateTypeContrat(Long id, TypeContrat typeContrat) {
        TypeContrat updateTypeContrat = getAllTypeContratById(id);
        updateTypeContrat.setCode(typeContrat.getCode());
        updateTypeContrat.setLibelle(typeContrat.getLibelle());
        return  typeContratRepository.save(updateTypeContrat);
    }

    @Override
    public void deleteTypeContrat(Long id) {
      TypeContrat deleteTypeContrat = getAllTypeContratById(id);
        deleteTypeContrat.setDeleted(true);
   typeContratRepository.save(deleteTypeContrat);


    }
    private  TypeContrat getAllTypeContratById(Long id){
        TypeContrat existingTypeContrat =  typeContratRepository.findById(id)
                .orElseThrow(( )->new RuntimeException("votre  TypeContrat nexiste pas"));
        return existingTypeContrat;
    }
}
