import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FichePaieService } from 'src/app/service/FichePaieService';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ListFichePaieComponent } from '../list-fiche-paie/list-fiche-paie.component';

@Component({
  selector: 'app-detail-fiche-paie',
  templateUrl: './detail-fiche-paie.component.html',
  styleUrls: ['./detail-fiche-paie.component.css']
})
export class DetailFichePaieComponent implements OnInit {

  actionBtn: string ='Creer fiche' 
  matriculeEmp: any;
  ListEmploye: any;
  FichePaie:any
  rubrique:any
  addFormGroup!: FormGroup;

  constructor(private servicePaie: ServicePaie, private fb:FormBuilder
    ,private serviceFiche:FichePaieService, private dialog: MatDialogRef <ListFichePaieComponent> ,
     @Inject(MAT_DIALOG_DATA) public detailData: any
    ,private router: Router) { }

  ngOnInit(): void {
    this.getListRubrique();
    this.relaodData();
    this.matriculeEmp = localStorage.getItem("empFiche");
    this.matriculeEmp = JSON.parse(this.matriculeEmp)
    this.getListEmploye();

    console.log("ListeEmp: ", this.ListEmploye)

    // this.addFormGroup = this.fb.group({
    // //   matricule: [this.matriculeEmp.matricule, Validators.required],
    //   periode: ['', Validators.required],
    // //   prenom: ['', Validators.required]
    //  });

    if (this.detailData) {
     this.ListEmploye?.controls['matricule'].setValue(this.detailData.matricule);
     this.ListEmploye?.controls['nom'].setValue(this.detailData.nom);
     this.ListEmploye?.controls['prenom'].setValue(this.detailData.prenom);
     this.ListEmploye?.controls['etat_civil'].setValue(this.detailData.etat_civil);
     this.ListEmploye?.controls.controls['type_paie'].setValue(this.detailData.type_paie);
     this.ListEmploye?.controls.controls['type_paie_ref'].setValue(this.detailData.type_paie_ref);
     this.ListEmploye?.controls.controls['nbr_epouse'].setValue(this.detailData.nbr_epouse);
     this.ListEmploye?.controls.controls['total_enfant'].setValue(this.detailData.total_enfant);
      //this.ListEmploye.controls.controls['nbrEnfant'].setValue(this.detailData.nbrEnfant);
     this.ListEmploye?.controls.controls['nbr_part_fical'].setValue(this.detailData.nbr_part_fical);
     this.ListEmploye?.controls.controls['nbr_part_impot'].setValue(this.detailData.nbr_part_impot);
     this.ListEmploye?.controls.controls['nom_corps'].setValue(this.detailData.nom_corps);
     this.ListEmploye?.controls.controls['salaire_base'].setValue(this.detailData.salaire_base);
     this.ListEmploye?.controls.controls['nbr_denfant_prest'].setValue(this.detailData.nbr_denfant_prest);
     this.ListEmploye?.controls.controls['nom_classe'].setValue(this.detailData.nom_classe);
     this.ListEmploye?.controls.controls['nom_echelon'].setValue(this.detailData.nom_echelon);
     this.ListEmploye?.controls.controls['jour_base'].setValue(this.detailData.jour_base);
     this.ListEmploye?.controls.controls['nbre_jour_presence'].setValue(this.detailData.nbre_jour_presence);
     this.ListEmploye?.controls.controls['statut_employe'].setValue(this.detailData.statut_employe);
     this.ListEmploye?.controls.controls['nom_hierarchie'].setValue(this.detailData.nom_hierarchie);
     this.ListEmploye?.controls.controls['mode_paie'].setValue(this.detailData.mode_paie);
     this.ListEmploye?.controls.controls['nom_banque'].setValue(this.detailData.nom_banque);
     this.ListEmploye?.controls.controls['nom_agence'].setValue(this.detailData.nom_agence);
     this.ListEmploye?.controls.controls['num_compte'].setValue(this.detailData.num_compte);
      
      

    }
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
