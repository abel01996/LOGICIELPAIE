package com.logicielPaie.service;

import com.logicielPaie.model.Banque;

import java.util.Collection;

public interface IBanqueService {

    Banque savebanque(Banque banque);

    Collection<Banque>getAllBanque();

    Banque updateBanque(Long id ,Banque banque);

    void deleteBanque(Long id);
}
