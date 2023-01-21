package com.logicielPaie.service;

import com.logicielPaie.model.ModePaie;
import com.logicielPaie.repository.ModePaieRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class ModePaieServiceImpl implements IModePaieService{
    private final ModePaieRespository modePaieRespository;
    @Override
    public ModePaie saveModePaie(ModePaie modePaie) {
        return modePaieRespository.save(modePaie);
    }

    @Override
    public Collection<ModePaie> getAllModePaie() {
        return modePaieRespository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public ModePaie updateModePaie(Long id, ModePaie modePaie) {
        ModePaie updateModePaie = getAllModePaieById(id);
        updateModePaie.setModePaie(modePaie.getModePaie());
        return modePaieRespository.save(modePaie);
    }

    @Override
    public void deleteModePaie(Long id) {
        ModePaie deleteModePaie = getAllModePaieById(id);
        deleteModePaie.setDeleted(true);
        modePaieRespository.save(deleteModePaie);

    }
    private ModePaie getAllModePaieById(Long id){

        ModePaie existingModePaie = modePaieRespository.findById(id)
                .orElseThrow(()->new RuntimeException("votre Mode Payement nexiste pas"));
        return existingModePaie;
    }
}
