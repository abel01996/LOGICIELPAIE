import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-type-paie-reference',
  templateUrl: './add-type-paie-reference.component.html',
  styleUrls: ['./add-type-paie-reference.component.css']
})
export class AddTypePaieReferenceComponent implements OnInit {

  TypePaieRef!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter TypePaie' 
  actiontitle:string ='Ajouter TypePaie'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddTypePaieReferenceComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      typePaieRef: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier TypePaie'
      this.actionBtn =' Modifier TypePaie';
      this.addModuleForm.controls['typePaieRef'].setValue(this.editData.typePaieRef);
    }
  }
  relaodData(){
    this.Service.getTypepaieRef()
      .subscribe(data=>{
        this.TypePaieRef = data;
      },err=>{
        console.log(err);
      })
  }
  addTypePaieRef(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postTypePaieRef(this.addModuleForm.value)
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
      this.updateTypePaieRef()
    }
  }
  updateTypePaieRef(){
    this.Service.putTypePaieRef(this.addModuleForm.value,this.editData.id)
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