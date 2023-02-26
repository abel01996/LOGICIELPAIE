package com.logicielPaie.service;

import com.logicielPaie.model.Direction;
import com.logicielPaie.model.Echelon;

import java.util.Collection;
import java.util.List;

public interface IDirectionService {

    Direction saveDirection( Direction direction);

    Collection< Direction> getAllDirection();

//    List<String>getEmployeByDirection();

    Direction updateDirection(Long id , Direction direction);

    void deleteDirection(Long id);
}
