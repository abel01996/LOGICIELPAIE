import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-type-paie',
  templateUrl: './add-type-paie.component.html',
  styleUrls: ['./add-type-paie.component.css']
})
export class AddTypePaieComponent implements OnInit {
  TypePaieapp!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter TypePaie' 
  actiontitle:string ='Ajouter TypePaie'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddTypePaieComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      typePaie: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier TypePaie'
      this.actionBtn =' Modifier TypePaie';
      this.addModuleForm.controls['typePaie'].setValue(this.editData.typePaie);
    }
  }
  relaodData(){
    this.Service.getTypepaie()
      .subscribe(data=>{
        this.TypePaieapp = data;
      },err=>{
        console.log(err);
      })
  }
  addTypePaie(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postTypePaie(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom TypePaie ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter TypePaie');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateTypePaie()
    }
  }
  updateTypePaie(){
    this.Service.putTypePaie(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton TypePaie a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour TypePaie');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}