package com.logicielPaie.controle;

import com.logicielPaie.model.Echelon;
import com.logicielPaie.service.EchelonServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class EchelonControler {

    private  final EchelonServiceImpl echelonService;

    @PostMapping("/saveEchelon/{idHierrchie}")

    public ResponseEntity<Echelon> saveEchelon(@RequestBody Echelon echelon){

        Echelon SavedEchelon =echelonService.saveEchelon(echelon);
        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedEchelon);
    }
    @GetMapping("/listEchelon")

    public  ResponseEntity<Collection<Echelon>>listEchelon(){

        return ResponseEntity.ok(echelonService.getAllEchelon());
    }
    @PutMapping("/updateEchelon/{id}")

    public  ResponseEntity<Echelon>updateEchelon(@PathVariable Long id, @RequestBody Echelon echelon){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(echelonService.updateEchelon(id,echelon));
    }

    @DeleteMapping("/deleteEchelon/{id}")

    public  ResponseEntity<Object>deleteEchelon(@PathVariable Long id){

        echelonService.deleteEchelon(id);

        return ResponseEntity.noContent().build();
    }

}
