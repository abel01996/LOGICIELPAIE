package com.logicielPaie.controle;

import com.logicielPaie.model.RubriqueFiche;
import com.logicielPaie.model.Salaire;
import com.logicielPaie.service.RubriqueServiceImpl;
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
public class RubriqueControler {
    private final RubriqueServiceImpl rubriqueService;

    @PostMapping("/saveRubriqueFiche")

    public ResponseEntity<RubriqueFiche> saveRubriqueFiche(@RequestBody RubriqueFiche rubriqueFiche){
        RubriqueFiche SavedRubriqueFiche =rubriqueService.saveRubrique(rubriqueFiche);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedRubriqueFiche);
    }
    @GetMapping("/listRubriqueFiche")

    public  ResponseEntity<Collection<RubriqueFiche>>listRubriqueFiche(){

        return ResponseEntity.ok(rubriqueService.getAllRubriqueFiche());
    }
    @PutMapping("/updateRubriqueFiche/{id}")

    public  ResponseEntity<RubriqueFiche>updateRubriqueFiche(@PathVariable Long id, @RequestBody RubriqueFiche rubriqueFiche){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(rubriqueService.updateRubriqueFiche(id,rubriqueFiche));
    }

    @DeleteMapping("/deleteRubriqueFiche/{id}")

    public  ResponseEntity<Object>deleteSalaire(@PathVariable Long id){

      rubriqueService.deleteRubriqueFiche(id);

        return ResponseEntity.noContent().build();
    }

}
