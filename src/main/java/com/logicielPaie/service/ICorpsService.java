package com.logicielPaie.service;

import com.logicielPaie.model.Corps;

import java.util.Collection;

public interface ICorpsService {
   Corps saveCorps(Corps corps);

    Collection<Corps> getAllCorps();

 Corps updateCorps(Long id ,Corps corps);

    void deleteCorps(Long id);
}
