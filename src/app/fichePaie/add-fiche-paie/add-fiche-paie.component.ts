
import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Employe } from 'src/model/Employe';


@Component({
  selector: 'app-add-fiche-paie',
  templateUrl: './add-fiche-paie.component.html',
  styleUrls: ['./add-fiche-paie.component.css']

})
  
export class AddFichePaieComponent implements OnInit {
  
 
  ImportationForm!:FormGroup;
  //  formControl!:FormGroup;
  
   
 constructor(private _formBuilder:FormBuilder, private service:ServicePaie){}
 
 isLinear!:BooleanInput;
  
  ngOnInit(): void {
  
    let matricule = localStorage.getItem('matricule');
    if (matricule != null) {
      
      this.service.getlistContratsByEmp(matricule).subscribe(
        (data:any) => {
          this.ImportationForm= this._formBuilder.group({
            //id: [data.data.id],
            matricule: [data.data.matricule],
            etatCivil: [data.data.etatCivil, Validators.required],
            nbrEpouse: [data.data.nbrEpouse],
            nbrPartImpot: [data.data.nbrPartImpot, Validators.required],
            nbrPartFical: [data.data.nbrPartFical],
            jourBase: [data.data.jourBase],
            nbrDenfantPrest: [data.data.nbrDenfantPrest],
            nbrEnfant: [data.data.nbrEnfant],
            totalEnfant: [data.data.totalEnfant],
            nbreJourPresence: [data.data.nbreJourPresence],
            nom: [data.data.nom],
            prenom: [data.data.prenom],
            // periode: [data.data.periode],
            typepaie_id: [data.data.typepaie.id],
            typePaieRef_id: [data.data.TypePaieRef.id],
            corp_id: [data.data.corps.id],
            salaireBase: [data.data.salaireBase],
            classe_id: [data.data.classe.id],
            echelon_id: [data.data.echelon.id],
            statut_id: [data.data.statut.id],
            hierarchie_id: [data.data.hierarchie.id],
            modePaie_id: [data.data.modePaie.id],
            service: [data.data.service.id],
            banque: [data.data.banque.id],
            agence_: [data.data.agence.id],
            numcompte: [data.data.numCompte],
          });

        })
      }
    }
  

    myMethod(value: string) {
      this.service.getMatricule(value).subscribe ( 
      (data :any)=> {
        this.ImportationForm = this._formBuilder.group({
          //id: [''],
          matricule: [''],
          etatCivil: [data.data.etatCivil],
          nbrEpouse: [data.data.nbrEpouse],
          nbrPartImpot: [data.data.nbrPartImpot],
          nbrPartFical: [data.data.nbrPartFical],
          jourBase: [data.data.jourBase],
          nbrDenfantPrest: [data.data.nbrDenfantPrest],
          nbrEnfant: [data.data.nbrEnfant],
          totalEnfant: [data.data.totalEnfant],
          nbreJourPresence: [data.data.nbreJourPresence],
          nom: [data.data.nom],
          prenom: [data.data.prenom],
          // periode: [data.data.periode],
            typepaie: [data.data.typepaie.id],
            typePaieRef: [data.data.TypePaieRef.id],
            corps: [data.data.corps.id],
            salaireBase: [data.data.salaireBase],
            classe: [data.data.classe.id],
            echelon: [data.data.echelon.id],
            statut: [data.data.statut.id],
            hierarchie: [data.data.hierarchie.id],
            modePaie: [data.data.modePaie.id],
            service: [data.data.service.id],
            banque: [data.data.banque.id],
            agence: [data.data.agence.id],
            compte: [data.data.numCompte],
        });
      });
  
    }
  
    onSubmit(){


    }
}