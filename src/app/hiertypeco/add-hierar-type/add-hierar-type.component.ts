import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-hierar-type',
  templateUrl: './add-hierar-type.component.html',
  styleUrls: ['./add-hierar-type.component.css']
})
export class AddHierarTypeComponent implements OnInit {

 
  Hierarchie!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Hierarchie' 
  actiontitle:string ='Ajouter Hierarchie'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddHierarTypeComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomHierarchie: ['', Validators.required],
      correspondance: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Hierarchie'
      this.actionBtn =' Modifier Hierarchie';
      this.addModuleForm.controls['nomHierarchie'].setValue(this.editData.nomHierarchie);
      this.addModuleForm.controls['correspondance'].setValue(this.editData.correspondance);
    }
  }
  relaodData(){
    this.Service.getHierarchie()
      .subscribe(data=>{
        this.Hierarchie = data;
      },err=>{
        console.log(err);
      })
  }
  addHierarchie(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postHierarchie(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Hierarchie ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Hierarchie');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateHierarchie()
    }
  }
  updateHierarchie(){
    this.Service.putHierarchie(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Hierarchie a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Hierarchie');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}