package com.logicielPaie.service;

import com.logicielPaie.model.Statut;
import com.logicielPaie.model.Typepaie;
import com.logicielPaie.repository.TypePaieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class TypePaieServiceImpl implements ITypepaieService{

    private final TypePaieRepository typePaieRepository;
    @Override
    public Typepaie saveTypepaie(Typepaie typepaie) {
        return typePaieRepository.save(typepaie);
    }

    @Override
    public Collection<Typepaie> getAllTypepaie() {
        return typePaieRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Typepaie updateTypepaie(Long id, Typepaie typepaie) {
        Typepaie updateTypepaie = getAllTypepaieById(id);
        updateTypepaie.setTypePaie(typepaie.getTypePaie());
        return typePaieRepository.save(updateTypepaie);
    }

    @Override
    public void deleteTypepaie(Long id) {
        Typepaie deleteTypepaie = getAllTypepaieById(id);
        deleteTypepaie.setDeleted(true);
        typePaieRepository.save(deleteTypepaie);

    }
    private Typepaie getAllTypepaieById(Long id){

        Typepaie existingTypepaie = typePaieRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre Typepaie n'existe pas"));
        return existingTypepaie;
    }
}
