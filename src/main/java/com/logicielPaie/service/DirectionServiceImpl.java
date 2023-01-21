package com.logicielPaie.service;

import com.logicielPaie.model.Direction;
import com.logicielPaie.repository.DirectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor

public class DirectionServiceImpl implements IDirectionService{

    private final DirectionRepository directionRepository;
    @Override
    public Direction saveDirection(Direction direction) {
        return directionRepository.save(direction);
    }

    @Override
    public Collection<Direction> getAllDirection() {
        return directionRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Direction updateDirection(Long id, Direction direction) {
        Direction updateDirect = getAllByIdDirection(id);
        updateDirect.setNomDirection(direction.getNomDirection());
        return directionRepository.save(updateDirect);
    }

    @Override
    public void deleteDirection(Long id) {

        Direction deleteDirection = getAllByIdDirection(id);
        deleteDirection.setDeleted(true);
        directionRepository.save(deleteDirection);

    }


    Direction getAllByIdDirection(Long id){
        Direction existingDirection = directionRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre direction n'existe pas"));
        return existingDirection;
    }
    }
