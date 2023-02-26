package com.logicielPaie.controle;

import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.model.FichePaie;
import com.logicielPaie.service.FichePaieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class FichePaieControler {
    private final FichePaieServiceImpl fichePaieService;
    @PostMapping("/saveFichePaie")

    public ResponseEntity<FichePaie> saveFichePaie(@RequestBody FichePaie fichePaie){
     FichePaie fichePaie1 =  fichePaieService.savedFichePaie(fichePaie);

        return  ResponseEntity.status(HttpStatus.CREATED).body(fichePaie1);
    }
    @GetMapping("/listFichePaie")

    public  ResponseEntity<Collection<FichePaie>>listFichePaie(){

        return  ResponseEntity.ok(fichePaieService.getAllFichePaie());

    }
    @PutMapping("/detailFiche/{id}")

    public  ResponseEntity<FichePaie>detailFiche(@PathVariable Long id, @RequestBody  FichePaie fichePaie){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body( fichePaieService.detailFichePaie(id,fichePaie));
    }

    @DeleteMapping("/deleteFiche/{id}")

    public  ResponseEntity<Object>deleteFiche(@PathVariable Long id){

       fichePaieService.deleteFichePaie(id);

        return ResponseEntity.noContent().build();
    }
}
