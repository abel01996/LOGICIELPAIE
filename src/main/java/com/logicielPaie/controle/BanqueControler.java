package com.logicielPaie.controle;

import com.logicielPaie.model.Banque;
import com.logicielPaie.service.BanqueServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor

public class BanqueControler {

    private final BanqueServiceImpl banqueService;

    @PostMapping("/saveBanque")

    public ResponseEntity<Banque>saveBanque(@RequestBody Banque banque){
        Banque SavedBanque = banqueService.savebanque(banque);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedBanque);
    }
    @GetMapping("/listBanque")

    public  ResponseEntity<Collection<Banque>>listBanque(){

        return ResponseEntity.ok(banqueService.getAllBanque());
    }
    @PutMapping("/updateBanque/{id}")

    public  ResponseEntity<Banque>updateBanque(@PathVariable Long id, @RequestBody Banque banque){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(banqueService.updateBanque(id ,banque));
    }

    @DeleteMapping("/deleteBanque/{id}")

    public  ResponseEntity<Object>deleteBanque(@PathVariable Long id){

        banqueService.deleteBanque(id);

        return ResponseEntity.noContent().build();
    }
}
