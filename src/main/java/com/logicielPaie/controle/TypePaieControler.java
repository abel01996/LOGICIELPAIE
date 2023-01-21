package com.logicielPaie.controle;

import com.logicielPaie.model.Typepaie;
import com.logicielPaie.service.TypePaieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/api/logicielPaie/v1")
@RestController
@RequiredArgsConstructor
public class TypePaieControler {
    private final TypePaieServiceImpl typePaieService;

    @PostMapping("/saveTypePaie")

    public ResponseEntity<Typepaie> saveTypePaie(@RequestBody Typepaie typepaie){
        Typepaie SavedTypePaie =typePaieService.saveTypepaie(typepaie);
        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedTypePaie);
    }
    @GetMapping("/listTypepaie")

    public  ResponseEntity<Collection<Typepaie>>listTypepaie(){

        return ResponseEntity.ok (typePaieService.getAllTypepaie());
    }
    @PutMapping("/updateTypepaie/{id}")

    public  ResponseEntity<Typepaie>updateTypepaie(@PathVariable Long id, @RequestBody Typepaie typepaie){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(typePaieService.updateTypepaie(id,typepaie));
    }

    @DeleteMapping("/deleteTypepaie/{id}")

    public  ResponseEntity<Object>deleteTypepaie(@PathVariable Long id){

       typePaieService.deleteTypepaie(id);

        return ResponseEntity.noContent().build();
    }
}
