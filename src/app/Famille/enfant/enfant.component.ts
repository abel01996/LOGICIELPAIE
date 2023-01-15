import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { ServiceFamille } from 'src/app/service/ServiceFamile';
import { Employe } from 'src/model/Employe';
import { Famille } from 'src/model/Famillle';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  Enfant!: Famille[];
  Employe!:Employe[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Enfant' 
  actiontitle:string ='Ajouter Enfant'

  constructor(private fb: FormBuilder,
    private Service:ServiceFamille, 
    @Inject(MAT_DIALOG_DATA) public editData: any,private ServiceEmp:ServiceEmployer,
    private dialog : MatDialogRef<EnfantComponent>) { }

  ngOnInit(): void {
    this.relaodEmployer();
    this.relaodData();
    this.addModuleForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaiss: ['', Validators.required],
      numeroRegistre: ['', Validators.required],
      employe_id:['', Validators.required]
      

    });

    if(this.editData){
      this.actiontitle='Modifier Enfant'
      this.actionBtn =' Modifier Enfant';
      this.addModuleForm.controls['nom'].setValue(this.editData.nom);
      this.addModuleForm.controls['prenom'].setValue(this.editData.nom);
      this.addModuleForm.controls['dateNaissance'].setValue(this.editData.dateNaissance);
      this.addModuleForm.controls['lieuNaiss'].setValue(this.editData.lieuNaiss);
      this.addModuleForm.controls['numeroRegistre'].setValue(this.editData.numeroRegistre);
      this.addModuleForm.controls['employe_id'].setValue(this.editData.employe.id);
    }
  }
  relaodData(){
    this.Service.getEnfant()
      .subscribe(data=>{
        this.Enfant= data;
      },err=>{
        console.log(err);
      })
  }
  relaodEmployer(){
    this.ServiceEmp.getEmployer()
      .subscribe(data=>{
        this.Employe= data;
      },err=>{
        console.log(err);
      })
  }
  addFamille(){
    if(!this.editData){
      if(this.addModuleForm.valid){
        const Enfant ={
         nom:this.addModuleForm.value['nom'],
          prenom:this.addModuleForm.value['prenom'],
          dateNaissance:this.addModuleForm.value['dateNaissance'],
          lieuNaiss:this.addModuleForm.value['lieuNaiss'],
          numeroRegistre:this.addModuleForm.value['numeroRegistre'],
          employe:{
            id: this.addModuleForm.value['employe_id']
          }
        }
        this.Service.postEnfant(Enfant)
        .subscribe({
          next:(res)=>{
      alert('Enfant ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Enfant');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEnfant()
    }
  }
  updateEnfant(){
    const Enfant ={
      nom:this.addModuleForm.value['nom'],
       prenom:this.addModuleForm.value['prenom'],
       dateNaissance:this.addModuleForm.value['dateNaissance'],
       lieuNaiss:this.addModuleForm.value['lieuNaiss'],
       numeroRegistre:this.addModuleForm.value['numeroRegistre'],
       employe:{
         id: this.addModuleForm.value['employe_id']
       },
     }
    this.Service.putEnfant(Enfant,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Enfant a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Enfant');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}