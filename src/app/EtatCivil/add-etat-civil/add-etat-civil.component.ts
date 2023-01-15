import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Employe } from 'src/model/Employe';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-etat-civil',
  templateUrl: './add-etat-civil.component.html',
  styleUrls: ['./add-etat-civil.component.css']
})
export class AddEtatCivilComponent implements OnInit {

  EtatCivil!: Employe[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter EtatCivil' 
  actiontitle:string ='Ajouter EtatCivil'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddEtatCivilComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      etatCivil: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier EtatCivil'
      this.actionBtn =' Modifier EtatCivil';
      this.addModuleForm.controls['etatCivil'].setValue(this.editData.etatCivil);
    }
  }
  relaodData(){
    this.Service.getEtatCivil()
      .subscribe(data=>{
        this.EtatCivil = data;
      },err=>{
        console.log(err);
      })
  }
  addEtatCivil(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postEtatCivil(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom EtatCivil ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter EtatCivil');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEtatCivil()
    }
  }
  updateEtatCivil(){
    this.Service.putEtatCivil(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton EtatCivil a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour EtatCivil');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}