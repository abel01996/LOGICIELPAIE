package com.logicielPaie.controle;

import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.model.ModePaie;
import com.logicielPaie.service.EtatCivilServiceImpl;
import com.logicielPaie.service.ModePaieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor

public class EtatCivilContoler {

    private  final EtatCivilServiceImpl etatCivilService;
    @PostMapping("/saveEtatCivil")

    public ResponseEntity<EtatCivil> saveEtatCivil(@RequestBody  EtatCivil etatCivil){
        EtatCivil SavedEtatCivil =  etatCivilService.saveEtatCivil(etatCivil);

        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedEtatCivil);
    }
    @GetMapping("/listEtatCivil")

    public  ResponseEntity<Collection< EtatCivil>>listEtatCivil(){

        return  ResponseEntity.ok(etatCivilService.getAllEtatCivil());

    }
    @PutMapping("/updateEtatCivil/{id}")

    public  ResponseEntity< EtatCivil>updateEtatCivil(@PathVariable Long id, @RequestBody  EtatCivil etatCivil){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(  etatCivilService.updateEtatCivil(id,etatCivil));
    }

    @DeleteMapping("/deleteEtatCivil/{id}")

    public  ResponseEntity<Object>deleteEtatCivil(@PathVariable Long id){

        etatCivilService.deleteEtatCivil(id);

        return ResponseEntity.noContent().build();
    }
}
