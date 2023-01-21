package com.logicielPaie.controle;

import com.logicielPaie.model.Hierarchie;
import com.logicielPaie.service.HierarchieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class HierarchieControle {
  private final HierarchieServiceImpl hierarchieService;
    @PostMapping("/saveHierarchie")

    public ResponseEntity<Hierarchie> saveHierarchie(@RequestBody Hierarchie hierarchie){
       Hierarchie SavedEchelon =hierarchieService.saveHierarchie(hierarchie);

        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedEchelon);
    }
    @GetMapping("/listHierarchie")

    public  ResponseEntity<Collection<Hierarchie >>listHierarchie(){

        return ResponseEntity.ok (hierarchieService.getAllHierarchie());
    }
    @PutMapping("/updateHierarchie/{id}")

    public  ResponseEntity<Hierarchie>updateHierarchie(@PathVariable Long id, @RequestBody Hierarchie hierarchie){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(hierarchieService.updateHierarchie(id,hierarchie));
    }

    @DeleteMapping("/deleteHierarchie/{id}")

    public  ResponseEntity<Object>deleteHierarchie(@PathVariable Long id){

        hierarchieService.deleteHierarchie(id);

        return ResponseEntity.noContent().build();
    }
}
