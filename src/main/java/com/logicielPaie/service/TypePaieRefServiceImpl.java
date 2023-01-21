package com.logicielPaie.service;

import com.logicielPaie.model.TypePaieRef;
import com.logicielPaie.model.Typepaie;
import com.logicielPaie.repository.TypePaieRefRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class TypePaieRefServiceImpl implements ITypePaieRefService{
    private final TypePaieRefRepository typePaieRefRepository;
    @Override
    public TypePaieRef savetypePaieRef(TypePaieRef typePaieRef) {
        return typePaieRefRepository.save(typePaieRef);
    }

    @Override
    public Collection<TypePaieRef> getAllTypepaieRef() {
        return typePaieRefRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public TypePaieRef updatetypePaieRef(Long id, TypePaieRef typePaieRef) {
        TypePaieRef updateTypepaieRef = getAllTypePaieRefById(id);
        updateTypepaieRef.setTypePaieRef(typePaieRef.getTypePaieRef());
        return typePaieRefRepository.save(updateTypepaieRef);
    }

    @Override
    public void deletetypePaieRef(Long id) {
        TypePaieRef deleteTypepaieRef = getAllTypePaieRefById(id);
        deleteTypepaieRef.setDeleted(true);
        typePaieRefRepository.save(deleteTypepaieRef);
    }
    private TypePaieRef getAllTypePaieRefById(Long id){

        TypePaieRef existingTypepaieRef = typePaieRefRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre TypepaieRef n'existe pas"));
        return existingTypepaieRef;
    }
}
