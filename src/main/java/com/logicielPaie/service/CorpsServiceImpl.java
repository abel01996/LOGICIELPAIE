package com.logicielPaie.service;

import com.logicielPaie.model.Corps;
import com.logicielPaie.model.Echelon;
import com.logicielPaie.repository.CorpsRepository;
import com.logicielPaie.repository.EchelonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@RequiredArgsConstructor
@Service

public class CorpsServiceImpl implements ICorpsService {

    private final CorpsRepository corpsRepository;
    private final EchelonRepository echelonRepository;

    @Override
    public Corps saveCorps(Corps corps) {
//        Echelon echelon = echelonRepository.findById(id).get();
//         corps.setEchelon(echelon);
        return corpsRepository.save(corps);
    }

    @Override
    public Collection<Corps> getAllCorps() {
        return corpsRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Corps updateCorps(Long id, Corps corps) {

        Corps updateCorps = getAllCorpsById(id);
        updateCorps.setCode(corps.getCode());
        updateCorps.setNomCorps(corps.getNomCorps());
//        Echelon echelon = echelonRepository.findById(corps.getEchelon().getId()).get();
//        updateCorps.setEchelon(echelon);
        return corpsRepository.save(updateCorps);

    }

    @Override
    public void deleteCorps(Long id) {
        Corps deleteBanque = getAllCorpsById(id);
        deleteBanque.setDeleted(true);
        corpsRepository.save(deleteBanque);

    }

    private Corps getAllCorpsById(Long id) {
        Corps existingCorps = corpsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre Classe nexiste pas"));
        return existingCorps;
    }
}