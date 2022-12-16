import { Component,Inject,inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-echelon',
  templateUrl: './add-echelon.component.html',
  styleUrls: ['./add-echelon.component.css']
})
export class AddEchelonComponent implements OnInit {

  Echelon!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Echelon' 
  actiontitle:string ='Ajouter Echelon'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddEchelonComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomEchelon: ['', Validators.required],
      correspondance: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Echelon'
      this.actionBtn =' Modifier Echelon';
      this.addModuleForm.controls['nomEchelon'].setValue(this.editData.nomEchelon);
      this.addModuleForm.controls['correspondance'].setValue(this.editData.correspondance);
    
    }
  }
  relaodData(){
    this.Service.getEchelon()
      .subscribe(data=>{
        this.Echelon = data;
      },err=>{
        console.log(err);
      })
  }
  addEchelon(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postEchelon(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Echelon ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Echelon');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEchelon()
    }
  }
  updateEchelon(){
    this.Service.putEchelon(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Echelon a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Echelon');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}