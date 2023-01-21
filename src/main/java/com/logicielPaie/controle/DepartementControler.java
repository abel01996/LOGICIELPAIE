package com.logicielPaie.controle;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Direction;
import com.logicielPaie.repository.DepartementRepository;
import com.logicielPaie.repository.DirectionRepository;
import com.logicielPaie.service.DepartementServiceImpl;
import com.logicielPaie.service.DirectionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class DepartementControler {

    private  final DepartementServiceImpl departementService;
    private  final DepartementRepository departementRepository;
    private  final DirectionRepository directionRepository;

    @PostMapping("/saveDep/{idDirection}")
    public ResponseEntity<Departement> saveDep(@RequestBody Departement departement, @PathVariable Long idDirection){
        Departement SavedDepartement =departementService.saveDep(departement, idDirection);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedDepartement);
    }

//    @PostMapping("/saveDepartement")
//    public ResponseEntity<Departement> saveDepartement(@RequestBody Departement departement){
//        Departement SavedDepartement =departementService.saveDepartement(departement);
//        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedDepartement);
//    }
    @GetMapping("/listDepartement")

    public  ResponseEntity<Collection<Departement>>listDepartement(){

        return ResponseEntity.ok(departementService.getAllDepartement());
    }

    @PutMapping("/updateDepartement/{id}")
    public  ResponseEntity<Departement>updateDepartement(@PathVariable Long id, @RequestBody Departement departement){

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(departementService.updateDepartement(id,departement));
    }

    @DeleteMapping("/deleteDepartement/{id}")

    public  ResponseEntity<Object>deleteDepartement(@PathVariable Long id){

        departementService.deleteDepartement(id);

        return ResponseEntity.noContent().build();
    }
    ////get treeview/////
//    @GetMapping("/listDepartementTree")
//    public  ResponseEntity<List<Departement>>listDepartements(@Param("direction") Long direction){
//        return ResponseEntity.ok(departementRepository.listeDepartement(direction));
//    }
    @GetMapping("/listDepartementTree/{id}")
    public  ResponseEntity<Collection<Departement>>listDepartementTree(@PathVariable Long id){
        return ResponseEntity.ok(departementService.getDepartementid(id));
    }
}
