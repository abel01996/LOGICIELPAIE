package com.logicielPaie.service;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.Employe;
import com.logicielPaie.model.EtatCivil;
import com.logicielPaie.repository.ContratRepository;
import com.logicielPaie.repository.EmployeRepository;
import com.logicielPaie.repository.EtatCivilRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class EmployeServiceImpl implements IEmployeService{
    private final EmployeRepository employeRepository;
    private final ContratRepository contratRepository;
    private final EtatCivilRepository etatCivilRepository;
    @Override
    public Employe saveEmployer(Employe employe) {
        return employeRepository.save(employe);
    }

    @Override
    public Collection<Employe> getAllEmployer() {
        return employeRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Employe updateEmployer(Long id, Employe employer) {

        Employe updateEmployer = getEmployerById(id);
        updateEmployer.setMatricule(employer.getMatricule());
        updateEmployer.setNom(employer.getNom());
        updateEmployer.setPrenom(employer.getPrenom());
        updateEmployer.setAdresse(employer.getAdresse());
        updateEmployer.setDateNaissance(employer.getDateNaissance());
        updateEmployer.setCni(employer.getCni());
        //situation Familliale
       updateEmployer.setNbrEpouse(employer.getNbrEpouse());
//        updateEmployer.setNbrEnfant(employer.getNbrEnfant());
       updateEmployer.setTotalEnfant(employer.getTotalEnfant());
        EtatCivil etatCivil = etatCivilRepository.findById(employer.getEtatCivil().getId()).get();
        updateEmployer.setEtatCivil(etatCivil);

        return employeRepository.save(updateEmployer);
    }

    @Override
    public void deleteEmployer(Long id) {
        Employe deleteEmployer = getEmployerById(id);
        deleteEmployer.setDeleted(true);
        employeRepository.save(deleteEmployer);
    }
    private Employe getEmployerById(Long id){

        Employe existingEmployer = employeRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("l'employer que vous rechercher n'existe pas"));
        return existingEmployer;
}
}
