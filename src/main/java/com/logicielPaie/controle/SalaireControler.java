package com.logicielPaie.controle;

import com.logicielPaie.model.Salaire;
import com.logicielPaie.service.SalaireServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class SalaireControler {
    private final SalaireServiceImpl salaireService;

    @PostMapping("/saveSalaire")

    public ResponseEntity<Salaire> saveSalaire(@RequestBody Salaire salaire){
        Salaire SavedSalaire =salaireService.saveSalaire(salaire);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedSalaire);
    }
    @GetMapping("/listSalaire")

    public  ResponseEntity<Collection<Salaire>>listSalaire(){

        return ResponseEntity.ok(salaireService.getAllSalaire());
    }
    @PutMapping("/updateSalaire/{id}")

    public  ResponseEntity<Salaire>updateCompte(@PathVariable Long id, @RequestBody Salaire salaire){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(salaireService.updateSalaire(id,salaire));
    }

    @DeleteMapping("/deleteSalaire/{id}")

    public  ResponseEntity<Object>deleteSalaire(@PathVariable Long id){

        salaireService.deleteSalaire(id);

        return ResponseEntity.noContent().build();
    }

}
