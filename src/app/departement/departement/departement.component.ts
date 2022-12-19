import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

 Departement!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='AjouterDepartement' 
  actiontitle:string ='AjouterDepartement'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<DepartementComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomDepartement: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='ModifierDepartement'
      this.actionBtn =' ModifierDepartement';
      this.addModuleForm.controls['nomDepartement'].setValue(this.editData.nomDepartement);
    }
  }
  relaodData(){
    this.Service.getDepartement()
      .subscribe(data=>{
        this.Departement = data;
      },err=>{
        console.log(err);
      })
  }
  addDepartement(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postDepartement(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nomDepartement ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('AjouterDepartement');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateDepartement()
    }
  }
  updateDepartement(){
    this.Service.putDepartement(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Departement a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jourDepartement');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}