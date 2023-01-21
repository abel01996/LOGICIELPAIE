package com.logicielPaie.repository;

import com.logicielPaie.model.Contrat;
import com.logicielPaie.model.ContratInterface;
import com.logicielPaie.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface ContratRepository  extends JpaRepository<Contrat,Long> {

    Collection<Contrat> findAllByAndIsDeletedIsFalseOrderByIdDesc();

////    @Query("SELECT c FROM Contrat WHERE c.employe = :matricule")
//    Collection<Contrat> findAllByEmploye(Employe employe);

  @Query(nativeQuery = true,value = "SELECT jour_base, nbr_denfant_prest, nbr_part_fical, nbr_part_impot, nbre_jour_presence, num_compte, salaire_base, "
          + "nom_corps, nom_classe, statut_employe, nom_echelon, nom_hierarchie, libelle, matricule, nom, prenom, nbr_epouse, total_enfant, nom_banque, "
          + "nom_agence, type_paie ,type_paie_ref, mode_paie, etat_civil FROM contrat, corps, classe, statut, echelon, hierarchie, employe, banque,  "
          + "type_contrat, typepaie, typepaie_ref, agence, mode_paie, etat_civil "
          + "WHERE corps.id = contrat.corp_id AND classe.id = contrat.classe_id "
          + "AND statut.id = contrat.statut_id AND echelon.id = contrat.echelon_id "
          + "AND hierarchie.id = contrat.hierarchie_id AND employe.id = contrat.employe_id "
          + "AND typepaie.id = contrat.typepaie_id AND typepaie_ref.id = contrat.type_paie_ref_id "
          + "AND agence.id = contrat.agence_id AND mode_paie.id = contrat.mode_paie_id AND type_contrat.id = contrat.type_contrat_id "
          + "AND etat_civil.id = employe.etat_civil_id AND banque.id = agence.banque_id AND employe.matricule =:matricule")

            ContratInterface getContratByEmploye(@Param("matricule") String matricule);

}
