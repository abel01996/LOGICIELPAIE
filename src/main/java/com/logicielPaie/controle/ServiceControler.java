package com.logicielPaie.controle;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Service;
import com.logicielPaie.repository.ServiceRepository;
import com.logicielPaie.service.DepartementServiceImpl;
import com.logicielPaie.service.ServiceServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/logicielPaie/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class ServiceControler {

 private final ServiceServiceImpl serviceService;
 private  final ServiceRepository serviceRepository;
 private final DepartementServiceImpl departementService;
    @PostMapping("/saveService/{idDepartement}")

    public ResponseEntity<Service> saveService(@RequestBody Service service ,@PathVariable Long idDepartement ){
        Service SavedService = serviceService.saveService(service, idDepartement);
        return  ResponseEntity.status(HttpStatus.CREATED).body(SavedService);
    }
    @GetMapping("/listService")

    public  ResponseEntity<Collection<Service>>listService(){

        return ResponseEntity.ok( serviceService.getAllService());
    }
    @PutMapping("/updateService/{id}")

    public  ResponseEntity<Service>updateService(@PathVariable Long id, @RequestBody Service service){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body( serviceService.updateService(id,service));
    }

    @DeleteMapping("/deleteService/{id}")

    public  ResponseEntity<Object>deleteService(@PathVariable Long id){

        serviceService.deleteService(id);

        return ResponseEntity.noContent().build();
    }

    /////getTreeService
//    @GetMapping("/listServiceTree")
//    public  ResponseEntity<Collection<Service>>listServices(@Param("departement") Long departement){
//        return ResponseEntity.ok(serviceRepository.listeService(departement));
    @GetMapping("/listServiceTree/{id}")
    public  ResponseEntity<Collection<Service>>listServiceTree(@PathVariable Long id){
        return ResponseEntity.ok(serviceService.getServiceid(id));
    }

}
