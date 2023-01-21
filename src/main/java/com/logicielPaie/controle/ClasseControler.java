package com.logicielPaie.controle;

import com.logicielPaie.model.Classe;
import com.logicielPaie.service.ClasseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor

public class ClasseControler {
    private final ClasseServiceImpl classeService;

    @PostMapping("/saveClasse/{idStatut}")

    public ResponseEntity<Classe > saveClasse(@RequestBody Classe classe){
        Classe SavedClasse = classeService.saveClasse(classe);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedClasse);
    }
    @GetMapping("/listClasse")

    public  ResponseEntity<Collection<Classe >>listClasse(){

        return ResponseEntity.ok(classeService.getAllClasse());
    }
    @PutMapping("/updateClasse/{id}")

    public  ResponseEntity<Classe>updateClasse(@PathVariable Long id, @RequestBody Classe classe){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(classeService.updateClasse(id,classe));
    }

    @DeleteMapping("/deleteClasse/{id}")

    public  ResponseEntity<Object>deleteClasse(@PathVariable Long id){

        classeService.deleteClasse(id);

        return ResponseEntity.noContent().build();
    }

}
