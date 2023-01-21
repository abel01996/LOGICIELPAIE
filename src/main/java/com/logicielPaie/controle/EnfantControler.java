package com.logicielPaie.controle;

import com.logicielPaie.model.Employe;
import com.logicielPaie.model.Enfant;
import com.logicielPaie.service.EmployeServiceImpl;
import com.logicielPaie.service.EnfantServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor

public class EnfantControler {
    private  final EnfantServiceImpl enfantService;

    @PostMapping("/saveEnfant")

    public ResponseEntity<Enfant> saveEnfant(@RequestBody Enfant enfant){
        Enfant SavedEnfant = enfantService.saveEnfant(enfant);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedEnfant);
    }

    @GetMapping("/listEnfant")

    public ResponseEntity<Collection<Enfant>>getAllEnfant(){

        return ResponseEntity.ok(enfantService.getAllEnfant());
    }

    @PutMapping("/updateEnfant/{id}")

    public ResponseEntity<Enfant>updateEmployer(@PathVariable Long id , @RequestBody Enfant enfant){

        return  ResponseEntity.status(HttpStatus.ACCEPTED).body(enfantService.updateEnfant(id,enfant));

    }

    @DeleteMapping("/deleteEnfant/{id}")
    public ResponseEntity<Object>deleteEnfant(@PathVariable Long id){
        enfantService.deleteEnfant(id);
        return ResponseEntity.noContent().build();
    }


}
