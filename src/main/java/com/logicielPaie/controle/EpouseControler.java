package com.logicielPaie.controle;

import com.logicielPaie.model.Enfant;
import com.logicielPaie.model.Epouse;
import com.logicielPaie.service.EnfantServiceImpl;
import com.logicielPaie.service.EpouseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor

public class EpouseControler {
    private  final EpouseServiceImpl epouseService;

    @PostMapping("/saveEpouse")

    public ResponseEntity<Epouse> saveEpouse(@RequestBody Epouse  epouse){
        Epouse SavedEpouse = epouseService.saveEpouse(epouse);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedEpouse);
    }

    @GetMapping("/listEpouse")

    public ResponseEntity<Collection<Epouse>>getAllEpouse(){

        return ResponseEntity.ok(epouseService.getAllEpouse());
    }

    @PutMapping("/updateEpouse/{id}")

    public ResponseEntity<Epouse>updateEmployer(@PathVariable Long id , @RequestBody Epouse epouse){

        return  ResponseEntity.status(HttpStatus.ACCEPTED).body(epouseService.updateEpouse(id,epouse));

    }

    @DeleteMapping("/deleteEpouse/{id}")
    public ResponseEntity<Object>deleteEpouse(@PathVariable Long id){
        epouseService.deleteEpouse(id);
        return ResponseEntity.noContent().build();
    }


}
