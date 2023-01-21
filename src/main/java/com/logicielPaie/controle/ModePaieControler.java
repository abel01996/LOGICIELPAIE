package com.logicielPaie.controle;

import com.logicielPaie.model.ModePaie;
import com.logicielPaie.service.ModePaieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class ModePaieControler {

    private  final ModePaieServiceImpl modePaieService;
    @PostMapping("/saveModePaie")

    public ResponseEntity<ModePaie> saveModePaie(@RequestBody ModePaie modePaie){
        ModePaie SavedModePaie = modePaieService.saveModePaie(modePaie);

        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedModePaie);
    }
    @GetMapping("/listModePaie")

    public  ResponseEntity<Collection<ModePaie>>listModePaie(){

        return ResponseEntity.ok( modePaieService.getAllModePaie());
    }
    @PutMapping("/updateModePaie/{id}")

    public  ResponseEntity<ModePaie>updateModePaie(@PathVariable Long id, @RequestBody ModePaie modePaie){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body( modePaieService.updateModePaie(id,modePaie));
    }

    @DeleteMapping("/deleteModePaie/{id}")

    public  ResponseEntity<Object>deleteModePaie(@PathVariable Long id){

        modePaieService.deleteModePaie(id);

        return ResponseEntity.noContent().build();
    }
}
