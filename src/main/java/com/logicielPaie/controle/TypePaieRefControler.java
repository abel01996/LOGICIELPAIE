package com.logicielPaie.controle;

import com.logicielPaie.model.TypePaieRef;
import com.logicielPaie.service.TypePaieRefServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class TypePaieRefControler {

    private final TypePaieRefServiceImpl typePaieRefService;
    @PostMapping("/saveTypePaieRef")

    public ResponseEntity<TypePaieRef> saveTypePaieRef(@RequestBody TypePaieRef typePaieRef){
        TypePaieRef SavedTypePaie =typePaieRefService.savetypePaieRef(typePaieRef);
        return  ResponseEntity.status(HttpStatus.CREATED).body( SavedTypePaie);
    }
    @GetMapping("/listTypepaieRef")

    public  ResponseEntity<Collection<TypePaieRef>>listTypepaieRef(){

        return ResponseEntity.ok (typePaieRefService.getAllTypepaieRef());
    }
    @PutMapping("/updateTypepaieRef/{id}")

    public  ResponseEntity<TypePaieRef>updateTypepaieRef(@PathVariable Long id, @RequestBody TypePaieRef typePaieRef){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(typePaieRefService.updatetypePaieRef(id,typePaieRef));
    }

    @DeleteMapping("/deleteTypepaieRef/{id}")

    public  ResponseEntity<Object>deleteTypepaieRef(@PathVariable Long id){

        typePaieRefService.deletetypePaieRef(id);

        return ResponseEntity.noContent().build();
    }
}
