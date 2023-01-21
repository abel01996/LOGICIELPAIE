package com.logicielPaie.controle;

import com.logicielPaie.model.Corps;
import com.logicielPaie.service.CorpsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor

public class CorpsControler {

private final CorpsServiceImpl corpsService;
    @PostMapping("/saveCorps/{id}")

    public ResponseEntity<Corps> saveCorps(@RequestBody Corps corps){
        Corps SavedCorps = corpsService.saveCorps(corps);

        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedCorps);
    }
    @GetMapping("/listCorps")

    public  ResponseEntity<Collection<Corps>>listCorps(){

        return ResponseEntity.ok(corpsService.getAllCorps());
    }
    @PutMapping("/updateCorps/{id}")

    public  ResponseEntity<Corps>updateCorps(@PathVariable Long id, @RequestBody Corps corps){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(corpsService.updateCorps(id,corps));
    }

    @DeleteMapping("/deleteCorps/{id}")

    public  ResponseEntity<Object>deleteCorps(@PathVariable Long id){

        corpsService.deleteCorps(id);

        return ResponseEntity.noContent().build();
    }
}
