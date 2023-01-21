package com.logicielPaie.service;

import com.logicielPaie.model.Direction;
import com.logicielPaie.model.Echelon;

import java.util.Collection;

public interface IDirectionService {

    Direction saveDirection( Direction direction);

    Collection< Direction> getAllDirection();

    Direction updateDirection(Long id , Direction direction);

    void deleteDirection(Long id);
}
