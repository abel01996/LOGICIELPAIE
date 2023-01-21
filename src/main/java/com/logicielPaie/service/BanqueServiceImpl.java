package com.logicielPaie.service;

import com.logicielPaie.model.Banque;
import com.logicielPaie.repository.BanqueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@RequiredArgsConstructor
@Service
public class BanqueServiceImpl implements IBanqueService{
    private  final BanqueRepository banqueRepository;
    @Override
    public Banque savebanque(Banque banque) {
        return banqueRepository.save(banque);
    }

    @Override
    public Collection<Banque> getAllBanque() {
        return banqueRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Banque updateBanque(Long id, Banque banque) {
        Banque updateBanque = getAllBanqueById(id);
        updateBanque.setCode(banque.getCode());
        updateBanque.setNomBanque(banque.getNomBanque());
        return  banqueRepository.save(updateBanque);
    }

    @Override
    public void deleteBanque(Long id) {
        Banque deleteBanque = getAllBanqueById(id);
         deleteBanque.setDeleted(true);
         banqueRepository.save(deleteBanque);


    }
    private  Banque getAllBanqueById(Long id){
        Banque existingBanque = banqueRepository.findById(id)
                .orElseThrow(( )->new RuntimeException("votre banque nexiste pas"));
        return existingBanque;
    }
}
