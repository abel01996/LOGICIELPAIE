import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContratService } from 'src/app/service/ContratService';
import { SalaireService } from 'src/app/service/SalaireService';
import { ServiceAgence } from 'src/app/service/ServiceAgence';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Agence } from 'src/model/Agence';
import { Contrat } from 'src/model/Contrat';
import { Employe } from 'src/model/Employe';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
    matriculeEmploye:any;
  // Salaire!:any[];
      Agence!: Agence[];
      ModePaie!: ModelPaie[];
      TypePaie!: ModelPaie[];
      TypePaieRef!:ModelPaie[];
      numCompte!:[];
      salaireBase!:[]
      ///contrat
  Echelon!:ModelPaie[];
  Classe!:ModelPaie[];
  Statut!:ModelPaie[];
  Corps!:ModelPaie[];
  Hierarchie!:ModelPaie[];
  TypeContrat!:ModelPaie[];
  Contrat!:Contrat[];
  Employe!:Employe[];

  addModuleForm1!: FormGroup;
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Contrat' 
  actiontitle:string ='Ajouter Contrat'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie,private ContratService:ContratService ,private salairesevice:ServiceAgence,private ServiceEmployer:ServiceEmployer,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<ContratComponent>) { }
    isOptional!: boolean;
  ngOnInit(): void {

    this.matriculeEmploye = this.getMatricule();
    this.isOptional=false;
    this.relaodTypPaieRef();
    this.relaodTypePaie();
    this.relaodModePaie()
    this.relaodAgence();
    this.relaodEmployer();
    this.relaodTypeContrat();
    this.relaodCorps();
    this.relaodEchelon();
    this.relaodClasse();
    this.relaodHierarchie();
    this. relaodStatut();
    this.relaodData();

    this.addModuleForm = this.fb.group({
      // embouche: ['', Validators.required],
      // dateFin: ['', Validators.required],
      corp_id: ['', Validators.required],
      classe_id: ['', Validators.required],
      statut_id: ['', Validators.required],
      hierarchie_id:['', Validators.required],
      echelon_id:['', Validators.required],
      employe_id:[this.matriculeEmploye.matricule, Validators.required],
      typeContrat_id:['', Validators.required],
     
    });

//salaire
    this.addModuleForm1 = this.fb.group({
      agence_id: ['', Validators.required],
      modePaie_id: ['', Validators.required],
      typePaie_id: ['', Validators.required],
      typePaieRef_id: ['', Validators.required],
       numCompte: ['', Validators.required],
       salaireBase:['', Validators.required],
       jourBase:['', Validators.required],
       nbrPartFical:['', Validators.required],
      nbrPartImpot:['', Validators.required],
      nbrDenfantPrest:['', Validators.nullValidator],
      nbreJourPresence:['', Validators.required]
   });


    if(this.editData){
      this.actiontitle='Modifier Contrat';
      this.actionBtn =' Modifier Contrat';
      //salaire/////////////////////////////////////////////////////////////////////////////
      
      this.addModuleForm1.controls['agence_id'].setValue(this.editData.agence.id);
      this.addModuleForm1.controls['modePaie_id'].setValue(this.editData.modePaie.id);
      this.addModuleForm1.controls['typePaie_id'].setValue(this.editData.typepaie.id);
      this.addModuleForm1.controls['typePaieRef_id'].setValue(this.editData.typePaieRef.id);
      this.addModuleForm1.controls['numCompte'].setValue(this.editData.numCompte);
      this.addModuleForm1.controls['salaireBase'].setValue(this.editData.salaireBase);
      this.addModuleForm1.controls['jourBase'].setValue(this.editData.jourBase);
      this.addModuleForm1.controls['nbrPartFical'].setValue(this.editData.nbrPartFical);
      this.addModuleForm1.controls['nbrPartImpot'].setValue(this.editData.nbrPartImpot);
      this.addModuleForm1.controls['nbrDenfantPrest'].setValue(this.editData.nbrDenfantPrest);
      this.addModuleForm1.controls['nbreJourPresence'].setValue(this.editData.nbreJourPresence);


     
      // this.addModuleForm.controls['embouche'].setValue(this.editData.embouche);
      // this.addModuleForm.controls['dateFin'].setValue(this.editData.dateFin);
      this.addModuleForm.controls['corp_id'].setValue(this.editData.corps.id);
      this.addModuleForm.controls['classe_id'].setValue(this.editData.classe.id);
      this.addModuleForm.controls['statut_id'].setValue(this.editData.statut.id);
      this.addModuleForm.controls['hierarchie_id'].setValue(this.editData.hierarchie.id);
      this.addModuleForm.controls['echelon_id'].setValue(this.editData.echelon.id);
      this.addModuleForm.controls['typeContrat_id'].setValue(this.editData.typeContrat.id);
      this.addModuleForm.controls['employe_id'].setValue(this.editData.matriculeEmploye.id);
      

    }
  }
  relaodData(){
    this.ContratService.getContrat()
      .subscribe(data=>{
        this.Contrat = data;
      },err=>{
        console.log(err);
      })
  }
  relaodTypPaieRef(){
    this.Service.getTypepaieRef()
      .subscribe(data=>{
        this.TypePaieRef = data;
      },err=>{
        console.log(err);
      })
  }
  relaodTypePaie(){
    this.Service.getTypepaie()
      .subscribe(data=>{
        this.TypePaie = data;
      },err=>{
        console.log(err);
      })
  }
  relaodModePaie(){
    this.Service.getModePaie()
      .subscribe(data=>{
        this.ModePaie = data;
      },err=>{
        console.log(err);
      })
  }

  getMatricule(){
    let element = localStorage.getItem('element');
    if(element) {
      const el: any  = JSON.parse(element);
      return el;
    }
    return null;
  }
  relaodAgence(){
    this.salairesevice.getAgence()
      .subscribe(data=>{
        this.Agence = data;
      },err=>{
        console.log(err);
      })
  }
  relaodCorps(){
    this.Service.getCorps()
      .subscribe(data=>{
        this.Corps = data;
      },err=>{
        console.log(err);
      })
  }
  // // relaodSalaire(){
  // //   this.Service.getCorps()
  // //     .subscribe(data=>{
  // //       this.Corps = data;
  // //     },err=>{
  // //       console.log(err);
  // //     })
  // }
  relaodEmployer(){
    this.ServiceEmployer.getEmployer()
      .subscribe(data=>{
        this.Employe = data;
      },err=>{
        console.log(err);
      })
  }
  relaodClasse(){
    this.Service.getClasse()
      .subscribe(data=>{
        this.Classe = data;
      },err=>{
        console.log(err);
      })
  }
  relaodHierarchie(){
    this.Service.getHierarchie()
      .subscribe(data=>{
        this.Hierarchie = data;
      },err=>{
        console.log(err);
      })
  }
  relaodStatut(){
    this.Service.getStatut()
      .subscribe(data=>{
        this.Statut = data;
      },err=>{
        console.log(err);
      })
  }
  relaodTypeContrat(){
    this.Service.getTypeContrat()
      .subscribe(data=>{
        this.TypeContrat = data;
      },err=>{
        console.log(err);
      })
  }
  relaodEchelon(){
    this.Service.getEchelon()
      .subscribe(data=>{
        this.Echelon = data;
      },err=>{
        console.log(err);
      })
  }
  addContrat(){
    if(!this.editData){
      if(this.addModuleForm.valid){
      //   embouche: ['', Validators.nullValidator],
      // dateFin: ['', Validators.nullValidator],
      // corp_id: ['', Validators.required],
      // classe_id: ['', Validators.required],
      // statut_id: ['', Validators.required],
      // hierarchie_id:['', Validators.required],
      // echelon_id:['', Validators.required],
      // employe_id:['', Validators.required],
      // typeContrat_id:['', Validators.required]
        const Contrat ={
          // embouche:this.addModuleForm.value['embouche'],
          // dateFin:this.addModuleForm.value['dateFin'],
          numCompte:this.addModuleForm1.value['numCompte'],
          salaireBase:this.addModuleForm1.value['salaireBase'],
          nbrPartFical: this.addModuleForm1.value['nbrPartFical'],
          nbrPartImpot: this.addModuleForm1.value['nbrPartImpot'],
          nbrDenfantPrest: this.addModuleForm1.value['nbrDenfantPrest'],
          jourBase: this.addModuleForm1.value['jourBase'],
          nbreJourPresence: this.addModuleForm1.value['nbreJourPresence'],
          employe:{
            id: this.matriculeEmploye.id
          },
          corps:{
            id:this.addModuleForm.value['corp_id']
          },
          classe:{
            id:this.addModuleForm.value['classe_id']
          },
          statut:{
            id:this.addModuleForm.value['statut_id']
          },
          hierarchie:{
            id: this.addModuleForm.value['hierarchie_id']
          },
          echelon:{
            id:  this.addModuleForm.value['echelon_id']
          },
          typeContrat:{
            id: this.addModuleForm.value['typeContrat_id']
          },
        
          agence: {
            id: this.addModuleForm1.value['agence_id']
          },
          modePaie:  {
            id: this.addModuleForm1.value['modePaie_id']
          },
          typepaie: {
            id: this.addModuleForm1.value['typePaie_id']
          },
          typePaieRef:  {
            id: this.addModuleForm1.value['typePaieRef_id']
          }
        
        };
       
      

  // console.log("Corp = ", Contrat)

        this.ContratService.postContrat(Contrat)
        .subscribe({
          next:(res)=>{
      alert('nom Contrat ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Contrat');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateCorps()
    }
  }
  updateCorps(){

    const Contrat ={
          // embouche:this.addModuleForm.value['embouche'],
          // dateFin:this.addModuleForm.value['dateFin'] ,
          numCompte:this.addModuleForm1.value['numCompte'],
          salaireBase:this.addModuleForm1.value['salaireBase'],
          nbrPartFical: this.addModuleForm1.value['nbrPartFical'],
          nbrPartImpot: this.addModuleForm1.value['nbrPartImpot'],
          nbrDenfantPrest: this.addModuleForm1.value['nbrDenfantPrest'],
          jourBase: this.addModuleForm1.value['jourBase'],
          nbreJourPresence: this.addModuleForm1.value['nbreJourPresence'],
          employe:{
            id: this.matriculeEmploye.id
            },
      corps: {
        id: this.addModuleForm.value['corp_id']
      },
      classe: {
        id: this.addModuleForm.value['classe_id']
      },

      statut: {
        id: this.addModuleForm.value['statut_id']
      },
      
      echelon: {
        id: this.addModuleForm.value['echelon_id']
      },
      hierarchie: {
        id: this.addModuleForm.value['hierarchie_id']
      },
      typeContrat: {
        id: this.addModuleForm.value['typeContrat_id']
      },
      agence: {
        id: this.addModuleForm1.value['agence_id']
      },
      modePaie:  {
        id: this.addModuleForm1.value['modePaie_id']
      },
      typepaie: {
        id: this.addModuleForm1.value['typePaie_id']
      },
      typePaieRef:  {
        id: this.addModuleForm1.value['typePaieRef_id']
      },
    
    };
  console.log("Corp = ", Contrat)
    this.ContratService.putContrat(Contrat,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("votre Contrat a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Contrat');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}
