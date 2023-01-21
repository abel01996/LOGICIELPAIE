package com.logicielPaie.service;

import com.logicielPaie.model.Departement;
import com.logicielPaie.model.Service;
import com.logicielPaie.model.Statut;

import java.util.Collection;

public interface IServiceService {
    Service saveService( Service  service, Long idDepartement);

    Collection< Service> getAllService();

    Collection<Service> getServiceid(Long id);
    Service updateService(Long id, Service service);

    void deleteService(Long id);
}
