package com.logicielPaie.service;

import com.logicielPaie.controle.CorpsControler;
import com.logicielPaie.model.Corps;
import com.logicielPaie.model.Echelon;
import com.logicielPaie.model.Hierarchie;
import com.logicielPaie.repository.CorpsRepository;
import com.logicielPaie.repository.EchelonRepository;
import com.logicielPaie.repository.HierarchieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class EchelonServiceImpl implements IEchelonService{

    private  final EchelonRepository echelonRepository;
    private final HierarchieRepository hierarchieRepository;
    private final CorpsRepository corpsRepository;
    @Override
    public Echelon saveEchelon(Echelon echelon) {
        return echelonRepository.save(echelon);
    }

    @Override
    public Collection<Echelon> getAllEchelon() {
        return echelonRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Echelon updateEchelon(Long id, Echelon echelon) {
        //update echelon donnees
        Echelon updateEchelon = getAllEchelonById(id);
        updateEchelon.setNomEchelon(echelon.getNomEchelon());
        updateEchelon.setCorrespondances(echelon.getCorrespondances());
        //update hierarchie id donnees
        //update Corps id donnees
//        Corps corps = corpsRepository.findById(echelon.getCorps().getId()).get();
//        updateEchelon.setCorps(corps);
        return echelonRepository.save(updateEchelon);
    }

    @Override
    public void  deleteEchelon(Long id) {
        Echelon echelonDelete = getAllEchelonById(id);
        echelonDelete.setDeleted(true);
      echelonRepository.save(echelonDelete);

    }
    private Echelon getAllEchelonById(Long id) {
       Echelon existingCorps = echelonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre Classe nexiste pas"));
        return existingCorps;
    }
}
