package com.logicielPaie.controle;

import com.logicielPaie.model.Statut;
import com.logicielPaie.service.StatutServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class StatutControler {
     private final StatutServiceImpl statutService;

    @PostMapping("/saveStatut")

    public ResponseEntity<Statut> saveStatut(@RequestBody Statut statut){
       Statut SavedStatut = statutService.saveStatut(statut);

        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedStatut);
    }
    @GetMapping("/listStatut")

    public  ResponseEntity<Collection<Statut >>listStatut(){

        return ResponseEntity.ok( statutService.getAllStatut());
    }
    @PutMapping("/updateStatut/{id}")

    public  ResponseEntity<Statut>updateStatut(@PathVariable Long id, @RequestBody Statut statut){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body( statutService.updateStatut(id,statut));
    }

    @DeleteMapping("/deleteStatut/{id}")

    public  ResponseEntity<Object>deleteEchelon(@PathVariable Long id){

        statutService.deleteStatut(id);

        return ResponseEntity.noContent().build();
    }
}
