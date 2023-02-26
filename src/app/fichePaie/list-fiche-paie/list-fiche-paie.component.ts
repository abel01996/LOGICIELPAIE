import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FichePaieService } from 'src/app/service/FichePaieService';
import { ServicePaie } from 'src/app/service/ServicePaie';

@Component({
  selector: 'app-list-fiche-paie',
  templateUrl: './list-fiche-paie.component.html',
  styleUrls: ['./list-fiche-paie.component.css']
})
export class ListFichePaieComponent implements OnInit {
  actionBtn: string ='Creer fiche' 
  matriculeEmp: any;
  ListEmploye: any;
  FichePaie:any;
  addFormGroup!: FormGroup;
  rubrique!:any;

  constructor(private servicePaie: ServicePaie, private fb:FormBuilder,
    private serviceFiche:FichePaieService, private dialog: MatDialogRef <ListFichePaieComponent>,
   private router: Router) { }

  ngOnInit() {
    
    this.relaodData();
    this.matriculeEmp = localStorage.getItem("empFiche");
    this.matriculeEmp = JSON.parse(this.matriculeEmp)
    this.getListEmploye();
    this.getListRubrique();

    console.log("ListeEmp: ", this.ListEmploye)

    // this.addFormGroup = this.fb.group({
    // //   matricule: [this.matriculeEmp.matricule, Validators.required],
    //   periode: ['', Validators.required],
    // //   prenom: ['', Validators.required]
    //  });

  
  }
 
  getListRubrique(){
    this.servicePaie.getRubriqueFiche().subscribe(data =>{
      this.rubrique = data;

      console.log('log1',this.rubrique)
    }
    ,err=>{
      console.log('logg',err);
    })
    
  }
  relaodData() {
    this.serviceFiche.getFichePaie()
      .subscribe(data => {
        this.FichePaie = data;
      }, err => {
        console.log(err);
      })
  }
  getListEmploye() {
    this.servicePaie.getlistContratsByEmp(this.matriculeEmp).subscribe(res => {
      this.ListEmploye = res;
    })
  }
 
 addFichePaie(){
  this.actionBtn='Creer fiche'
    const fiche ={
      matricule:this.ListEmploye['matricule'],
      nom: this.ListEmploye['nom'],
      prenom: this.ListEmploye['prenom'],
      nbr_part_impot: this.ListEmploye['nbr_part_impot'],
      nbre_jour_presence: this.ListEmploye['nbre_jour_presence'],
      nbr_denfant_prest: this.ListEmploye['nbr_denfant_prest'],
      nbr_part_fical: this.ListEmploye['nbr_part_fical'],
      salaire_base: this.ListEmploye['salaire_base'],
      nom_corps: this.ListEmploye['nom_corps'],
      etat_civil: this.ListEmploye['etat_civil'],
      type_paie: this.ListEmploye['type_paie'],
      type_paie_ref: this.ListEmploye['type_paie_ref'],
      total_enfant: this.ListEmploye['total_enfant'],
      nbr_epouse: this.ListEmploye['nbr_epouse'],
      statut_employe: this.ListEmploye['statut_employe'],
      nom_classe: this.ListEmploye['nom_classe'],
      mode_paie: this.ListEmploye['mode_paie'],
      num_compte: this.ListEmploye['num_compte'],
      nom_agence: this.ListEmploye['nom_agence'],
      nom_echelon: this.ListEmploye['nom_echelon'],
      jour_base: this.ListEmploye['jour_base'],
      nom_banque: this.ListEmploye['nom_banque'],
      nom_hierarchie: this.ListEmploye['nom_hierarchie'],
      libelle: this.ListEmploye['libelle'],
      // periode: this.ListEmploye['periode'],

    }
    this.serviceFiche.postFichePaie(fiche)
    .subscribe({
      next: (res) => {
        alert(' fiche ajouter avec succees')
        this.router.navigateByUrl("/addFichePaie")
        this.relaodData;
        // this.ListEmploye.reset();
      },
      error: () => {
        alert("errreur lors de l'enregistrement")
      }
    })
 }
//  openDialog() {
//   const dialogRef = this.d.open(ListFichePaieComponent, {
//     width: '1800px',
//     height:'260%'
//   }).afterClosed().subscribe(val =>{
//        if(val==='Ajouter Agent'){
        
//       }
//     })
// }
}
