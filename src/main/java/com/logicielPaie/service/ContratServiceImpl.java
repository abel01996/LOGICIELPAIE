package com.logicielPaie.service;

import com.logicielPaie.model.*;
import com.logicielPaie.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@RequiredArgsConstructor
@Service
public class ContratServiceImpl  implements IContratService{

    private final ContratRepository contratRepository;
    private final CorpsRepository corpsRepository;
    private final ClassRepository classRepository;
    private final StatutRepository statutRepository;
    private final EchelonRepository echelonRepository;
    private final HierarchieRepository hierarchieRepository;
    private final TypeContratRepository typeContratRepository;
    private final EmployeRepository employeRepository;
    private final AgenceRepository agenceRepository;
    private final TypePaieRepository typePaieRepository;
    private final TypePaieRefRepository typePaieRefRepository;
    private final ModePaieRespository modePaieRespository;


    @Override
    public Contrat saveContrat(Contrat contrat) {
//
        return contratRepository.save(contrat);
    }

    @Override
    public Collection<Contrat> getAllContrat() {
        return contratRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public ContratInterface getContratInterface(String matricule) {
        return contratRepository.getContratByEmploye(matricule);
    }

    @Override
    public Contrat updateContrat(Long id, Contrat contrat) {

        Contrat updateContrat = getAllContratById(id);
        updateContrat.setEmbouche(contrat.getEmbouche());
        updateContrat.setDateFin(contrat.getDateFin());
        updateContrat.setNumCompte(contrat.getNumCompte());
        updateContrat.setSalaireBase(contrat.getSalaireBase());
        updateContrat.setNbrPartFical(contrat.getNbrPartFical());
        updateContrat.setNbrPartImpot(contrat.getNbrPartImpot());
        updateContrat.setNbrDenfantPrest(contrat.getNbrDenfantPrest());
        updateContrat.setJourBase(contrat.getJourBase());
        updateContrat.setNbreJourPresence(contrat.getNbreJourPresence());
        Employe employe = employeRepository.findById(contrat.getEmploye().getId()).get();
        updateContrat.setEmploye(employe);
        Corps corps = corpsRepository.findById(contrat.getCorps().getId()).get();
        updateContrat.setCorps(corps);
        Classe classe = classRepository.findById(contrat.getClasse().getId()).get();
        updateContrat.setClasse(classe);
        Statut statut = statutRepository.findById(contrat.getStatut().getId()).get();
        updateContrat.setStatut(statut);
        Echelon echelon = echelonRepository.findById(contrat.getEchelon().getId()).get();
        updateContrat.setEchelon(echelon);
        Hierarchie hierarchie = hierarchieRepository.findById(contrat.getHierarchie().getId()).get();
        updateContrat.setHierarchie(hierarchie);
        TypeContrat typeContrat = typeContratRepository.findById(contrat.getTypeContrat().getId()).get();
        updateContrat.setTypeContrat(typeContrat);
     //Salaire
        Agence agence = agenceRepository.findById(contrat.getAgence().getId()).get();
        updateContrat.setAgence(agence);
        ModePaie modePaie = modePaieRespository.findById(contrat.getModePaie().getId()).get();
        updateContrat.setModePaie(modePaie);
        Typepaie typepaie = typePaieRepository.findById(contrat.getTypepaie().getId()).get();
        updateContrat.setTypepaie(typepaie);
        TypePaieRef typePaieRef = typePaieRefRepository.findById(contrat.getTypePaieRef().getId()).get();
        updateContrat.setTypePaieRef(typePaieRef);

        return contratRepository.save(updateContrat);
    }

    @Override
    public void deleteContrat(Long id) {
        Contrat deleteContrat = getAllContratById(id);
        deleteContrat.setDeleted(true);
        contratRepository.save(deleteContrat);
    }
    Contrat getAllContratById(Long id){

        Contrat existing = contratRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre Contrat n'existe pas"));
        return existing;
    }

}
