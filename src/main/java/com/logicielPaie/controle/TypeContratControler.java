package com.logicielPaie.controle;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.TypeContrat;
import com.logicielPaie.service.TypeContratServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor

public class TypeContratControler {
    private final TypeContratServiceImpl typeContratService;

    @PostMapping("/saveTypeContrat")

    public ResponseEntity<TypeContrat>saveTypeContrat(@RequestBody TypeContrat typeContrat){
        TypeContrat SavedTypeContrat =typeContratService.saveTypeContrat(typeContrat);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedTypeContrat);
    }
    @GetMapping("/listTypeContrat")

    public  ResponseEntity<Collection<TypeContrat>>listTypeContrat(){

        return ResponseEntity.ok(typeContratService.getAllTypeContrat());
    }
    @PutMapping("/updateTypeContrat/{id}")

    public  ResponseEntity<TypeContrat>updateTypeContrat(@PathVariable Long id, @RequestBody TypeContrat typeContrat){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(typeContratService.updateTypeContrat(id,typeContrat));
    }

    @DeleteMapping("/deleteTypeContrat/{id}")

    public  ResponseEntity<Object>deleteTypeContrat(@PathVariable Long id){

        typeContratService.deleteTypeContrat(id);

        return ResponseEntity.noContent().build();
    }

}