import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-mode-paie',
  templateUrl: './add-mode-paie.component.html',
  styleUrls: ['./add-mode-paie.component.css']
})
export class AddModePaieComponent implements OnInit {

  ModePaie!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter ModePaie' 
  actiontitle:string ='Ajouter ModePaie'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddModePaieComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      modePaie: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier ModePaie'
      this.actionBtn =' Modifier ModePaie';
      this.addModuleForm.controls['modePaie'].setValue(this.editData.modePaie);
    }
  }
  relaodData(){
    this.Service.getModePaie()
      .subscribe(data=>{
        this.ModePaie = data;
      },err=>{
        console.log(err);
      })
  }
  addModePaie(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postModePaie(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom ModePaie ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter ModePaie');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateModePaie()
    }
  }
  updateModePaie(){
    this.Service.putModePaie(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton ModePaie a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour ModePaie');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}