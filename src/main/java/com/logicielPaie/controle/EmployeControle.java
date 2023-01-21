package com.logicielPaie.controle;

import com.logicielPaie.model.Employe;
import com.logicielPaie.service.EmployeServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor

public class EmployeControle {
    private  final EmployeServiceImpl employeService;

    @PostMapping("/saveEmployer")

    public ResponseEntity<Employe> saveEmployer(@RequestBody Employe employe){
        Employe SavedEmployer = employeService.saveEmployer(employe);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedEmployer);
    }

    @GetMapping("/listEmployer")

    public ResponseEntity<Collection<Employe>>getAllEmployer(){

        return ResponseEntity.ok(employeService.getAllEmployer());
    }

    @PutMapping("/updateEmployer/{id}")

    public ResponseEntity<Employe>updateEmployer(@PathVariable Long id ,@RequestBody Employe employer){

        return  ResponseEntity.status(HttpStatus.ACCEPTED).body(employeService.updateEmployer(id,employer));

    }

    @DeleteMapping("/deleteEmployer/{id}")
    public ResponseEntity<Object>deleteEmployer(@PathVariable Long id){
        employeService.deleteEmployer(id);
        return ResponseEntity.noContent().build();
    }


}
