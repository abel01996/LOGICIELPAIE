package com.logicielPaie.service;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Service;
import com.logicielPaie.model.Statut;
import com.logicielPaie.repository.DepartementRepository;
import com.logicielPaie.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
@org.springframework.stereotype.Service
@RequiredArgsConstructor


public class ServiceServiceImpl implements IServiceService{
   private final ServiceRepository serviceRepository;
   private  final DepartementRepository departementRepository;
    @Override
    public Service saveService(Service service , Long idDepartement) {
        Departement departement= departementRepository.findById(idDepartement).get();
       service.setDepartement(departement);
        return serviceRepository.save(service);
    }

    @Override
    public Collection<Service> getAllService() {
        return serviceRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Collection<Service> getServiceid(Long id) {

        var departement =  departementRepository.findById(id).get();

        return serviceRepository.findByDepartement(departement);
    }

    @Override
    public Service updateService(Long id, Service service) {
        Service updateService = getAllServiceById(id);
        updateService.setNomService(service.getNomService());
        return serviceRepository.save(updateService);
    }

    @Override
    public void deleteService(Long id) {
        Service deleteService = getAllServiceById(id);
        deleteService.setDeleted(true);
        serviceRepository.save(deleteService);

    }
    private Service getAllServiceById(Long id){

        Service existingStatut = serviceRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre statut n'existe pas"));
        return existingStatut;
    }
}
