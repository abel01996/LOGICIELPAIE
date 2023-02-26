package com.logicielPaie.service;

import com.logicielPaie.model.FichePaie;
import com.logicielPaie.repository.FichePaieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
@RequiredArgsConstructor
public class FichePaieServiceImpl implements IFichePaie{
    private final FichePaieRepository fichePaieRepository;
    @Override
    public FichePaie savedFichePaie(FichePaie fichePaie) {
        return fichePaieRepository.save(fichePaie) ;
    }

    @Override
    public Collection<FichePaie> getAllFichePaie() {
        return fichePaieRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public FichePaie detailFichePaie(Long id, FichePaie fichePaie) {
        FichePaie detail = getAllFichePaieById(id);
        detail.setMatricule(detail.getMatricule());
        detail.setNom(detail.getNom());
        detail.setPrenom(detail.getPrenom());
        detail.setEtat_civil(detail.getEtat_civil());
        detail.setPeriode(detail.getPeriode());
        detail.setType_paie(detail.getType_paie());
        detail.setType_paie_ref(detail.getType_paie_ref());
        detail.setNbr_epouse(detail.getNbr_epouse());
        detail.setTotal_enfant(detail.getTotal_enfant());
        detail.setNbr_part_fical(detail.getNbr_part_fical());
        detail.setNbr_part_impot(detail.getNbr_part_impot());
        detail.setNom_corps(detail.getNom_corps());
        detail.setSalaire_base(detail.getSalaire_base());
        detail.setNbr_denfant_prest(detail.getNbr_denfant_prest());
        detail.setNom_classe(detail.getNom_classe());
        detail.setNom_echelon(detail.getNom_echelon());
        detail.setJour_base(detail.getJour_base());
        detail.setNbre_jour_presence(detail.getNbre_jour_presence());
        detail.setStatut_employe(detail.getStatut_employe());
        detail.setNom_hierarchie(detail.getNom_hierarchie());
        detail.setMode_paie(detail.getMode_paie());
        detail.setNom_banque(detail.getNom_banque());
        detail.setNom_agence(detail.getNom_agence());
        detail.setNum_compte(detail.getNum_compte());

        return fichePaieRepository.save(detail);
    }

    @Override
    public void deleteFichePaie(Long id) {

        FichePaie delete = getAllFichePaieById(id);
        delete.setDeleted(true);
        fichePaieRepository.save(delete);

    }

   private FichePaie getAllFichePaieById(Long id){
        FichePaie existing = fichePaieRepository.findById(id)
                .orElseThrow(()->new RuntimeException("votre FichePaie n'existe pas"));
        return  existing;
    }
}
