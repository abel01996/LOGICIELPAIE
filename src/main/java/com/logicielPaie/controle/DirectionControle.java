package com.logicielPaie.controle;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import com.logicielPaie.repository.DirectionRepository;
import com.logicielPaie.service.DirectionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class DirectionControle {

    private final DirectionServiceImpl directionService;
    private final DirectionRepository directionRepository;

    @PostMapping("/saveDirection")

    public ResponseEntity<Direction> saveDirection(@RequestBody Direction direction){
        Direction SavedDirection =directionService.saveDirection(direction);

        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedDirection);
    }
    @GetMapping("/listDirection")

    public  ResponseEntity<Collection<Direction>>listDirection(){

        return ResponseEntity.ok(directionService.getAllDirection());
    }
    @PutMapping("/updateDirection/{id}")

    public  ResponseEntity<Direction>updateDirection(@PathVariable Long id, @RequestBody Direction direction){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(directionService.updateDirection(id,direction));
    }

    @DeleteMapping("/deleteDirection/{id}")

    public  ResponseEntity<Object>deleteDirection(@PathVariable Long id){
        directionService.deleteDirection(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/listDirectionTree")
    public ResponseEntity <List<Direction>>listDirections(){
        return ResponseEntity.ok(directionRepository.findAll());
    }

//    @GetMapping("/listEmploye")
//    public  List<String>ListEmploye(){
//        return directionService.getEmployeByDirection();
//    }
}
