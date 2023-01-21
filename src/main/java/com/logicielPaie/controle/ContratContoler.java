package com.logicielPaie.controle;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.ContratInterface;
import com.logicielPaie.model.Employe;
import com.logicielPaie.repository.ContratRepository;
import com.logicielPaie.repository.EmployeRepository;
import com.logicielPaie.service.ContratServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class ContratContoler {
    private final ContratRepository contratRepository;

    private final EmployeRepository employeRepository;
 private final ContratServiceImpl contratService;
    @PostMapping("/saveContrat")

    public ResponseEntity<Contrat> saveContrat(@RequestBody Contrat contrat){
        Contrat SavedContrat =contratService.saveContrat(contrat);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedContrat);
    }
    @GetMapping("/listContrat")

    public  ResponseEntity<Collection<Contrat>>listContrat(){

        return ResponseEntity.ok(contratService.getAllContrat());
    }
    @PutMapping("/updateContrat/{id}")

    public  ResponseEntity<Contrat>updateContrat(@PathVariable Long id, @RequestBody Contrat contrat){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(contratService.updateContrat(id,contrat));
    }

    @DeleteMapping("/deleteContrat/{id}")

    public  ResponseEntity<Object>deleteContrat(@PathVariable Long id){

        contratService.deleteContrat(id);

        return ResponseEntity.noContent().build();
    }


    @GetMapping("/listContratsByEmp/{matricule}")
    public  ResponseEntity<ContratInterface>listContratsByEmp(@PathVariable String matricule){
        ContratInterface contratInterface = contratService.getContratInterface(matricule);
        return ResponseEntity.ok(contratInterface);
    }

}
