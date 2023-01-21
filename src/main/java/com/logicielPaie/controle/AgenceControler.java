package com.logicielPaie.controle;

import com.logicielPaie.model.Agence;
import com.logicielPaie.service.AgenceServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class AgenceControler {
 private final AgenceServiceImpl agenceService;
    @PostMapping("/saveAgence/{id}")

    public ResponseEntity<Agence> saveAgence(@RequestBody Agence agence, @PathVariable Long id){
        Agence SavedAgence = agenceService.saveAgence(agence,id);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedAgence);
    }
    @GetMapping("/listAgence")

    public  ResponseEntity<Collection<Agence>>listAgence(){

    return ResponseEntity.ok(agenceService.getAllAgence());
    }
    @PutMapping("/updateAgence/{id}")

    public  ResponseEntity<Agence>updateAgence(@PathVariable Long id, @RequestBody Agence agence){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(agenceService.updateAgence(id ,agence));
    }

    @DeleteMapping("/deleteAgence/{id}")

    public  ResponseEntity<Object>deleteAgence(@PathVariable Long id){

        agenceService.deleteAgence(id);

        return ResponseEntity.noContent().build();
    }
}
