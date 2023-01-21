package com.logicielPaie.service;

import com.logicielPaie.model.TypePaieRef;
import com.logicielPaie.model.Typepaie;

import java.util.Collection;

public interface ITypePaieRefService {
    TypePaieRef savetypePaieRef(TypePaieRef typePaieRef);

    Collection<TypePaieRef> getAllTypepaieRef();

    TypePaieRef updatetypePaieRef(Long id, TypePaieRef typePaieRef);

    void deletetypePaieRef(Long id);
}
