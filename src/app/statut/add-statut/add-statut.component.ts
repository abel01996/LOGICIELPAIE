import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-statut',
  templateUrl: './add-statut.component.html',
  styleUrls: ['./add-statut.component.css']
})
export class AddStatutComponent implements OnInit {
  Statutapp!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Statut' 
  actiontitle:string ='Ajouter Statut'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddStatutComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      statutEmploye: ['', Validators.required],
      code:['', Validators.nullValidator],
      correspondance:['', Validators.required],

    });

    if(this.editData){
      this.actiontitle='Modifier Statut'
      this.actionBtn =' Modifier Statut';
      this.addModuleForm.controls['statutEmploye'].setValue(this.editData.statutEmploye);
      this.addModuleForm.controls['code'].setValue(this.editData.code);
      this.addModuleForm.controls['correspondance'].setValue(this.editData.correspondance);
    }
  }
  relaodData(){
    this.Service.getStatut()
      .subscribe(data=>{
        this.Statutapp = data;
      },err=>{
        console.log(err);
      })
  }
  addStatut(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postStatut(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Statut ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Statut');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateStatut()
    }
  }
  updateStatut(){
    this.Service.putStatut(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Statut a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Statut');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}