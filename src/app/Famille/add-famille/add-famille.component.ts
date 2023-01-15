import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { ServiceFamille } from 'src/app/service/ServiceFamile';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Employe } from 'src/model/Employe';
import { Famille,  } from 'src/model/Famillle';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-famille',
  templateUrl: './add-famille.component.html',
  styleUrls: ['./add-famille.component.css']
})
export class AddFamilleComponent implements OnInit {
  Epouse!: Famille[];
  Employe!:Employe[];
  actionBtn: string ='Ajouter Epoux(se)' 
  addModuleForm!: FormGroup;
  matriculeEmploye: any;
  actiontitle:string ='Ajouter Epoux(se)'  
  constructor(private fb: FormBuilder,

    private Service:ServiceFamille, 
    @Inject(MAT_DIALOG_DATA) public editData: any,private ServiceEmp:ServiceEmployer,
    private dialog : MatDialogRef<AddFamilleComponent>) { }

  ngOnInit(): void {
    this.matriculeEmploye = this.getMatricule();
    // console.log('matEmp',this.matriculeEmploye)
    this.relaodEmployer();
    this.relaodData();
    this.addModuleForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      profession: ['', Validators.required],
      tel: ['', Validators.required],
      mariage: ['', Validators.required],
      employe_id:[this.matriculeEmploye.matricule, Validators.nullValidator]

    });

    if(this.editData){
      this.actiontitle='Modifier Epoux(se)'
      this.actionBtn =' Modifier Epoux(se)';
      this.addModuleForm.controls['nom'].setValue(this.editData.nom);
      this.addModuleForm.controls['prenom'].setValue(this.editData.prenom);
      this.addModuleForm.controls['dateNaissance'].setValue(this.editData.dateNaissance);
      this.addModuleForm.controls['profession'].setValue(this.editData.profession);
      this.addModuleForm.controls['tel'].setValue(this.editData.tel);
      this.addModuleForm.controls['mariage'].setValue(this.editData.mariage);
      this.addModuleForm.controls['employe_id'].setValue(this.editData.matriculeEmploye.id);
    }
  }

  getMatricule(){
    let element = localStorage.getItem('element');
    if(element) {
      const el: any  = JSON.parse(element);
      return el;
    }
    return null;
  }

  relaodData(){
    
    this.Service.getEpouse()
      .subscribe(data=>{
        this.Epouse= data;
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
        const Epouse ={
         nom:this.addModuleForm.value['nom'],
          prenom:this.addModuleForm.value['prenom'],
          dateNaissance:this.addModuleForm.value['dateNaissance'],
          profession:this.addModuleForm.value['profession'],
          tel:this.addModuleForm.value['tel'],
          mariage: this.addModuleForm.value['mariage'],
          employe:{
            // id: this.addModuleForm.value['employe_id']
            id: this.matriculeEmploye.id
          }
        }
        this.Service.postEpouse(Epouse)
        .subscribe({
          next:(res)=>{
      alert('Epoux(se) ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Epoux(se)');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEpouse()
    }
  }
  updateEpouse(){
    const Epouse ={
      nom:this.addModuleForm.value['nom'],
       prenom:this.addModuleForm.value['prenom'],
       dateNaissance:this.addModuleForm.value['dateNaissance'],
       profession:this.addModuleForm.value['profession'],
       tel:this.addModuleForm.value['tel'],
       mariage: this.addModuleForm.value['mariage'],
       employe:{
        //  id: this.addModuleForm.value['employe_id']
        id: this.matriculeEmploye.id
       },
     }
     console.log('epouse',Epouse)
    this.Service.putEpouse(Epouse,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Ton Epoux(se) a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Epoux(se)');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

 
}