import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-type-contrat',
  templateUrl: './type-contrat.component.html',
  styleUrls: ['./type-contrat.component.css']
})
export class TypeContratComponent implements OnInit {

 TypeContrat!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter TypeContrat' 
  actiontitle:string ='Ajouter TypeContrat'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<TypeContratComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      code: ['', Validators.nullValidator],
      libelle: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Type Contrat'
      this.actionBtn =' Modifier Type Contrat';
      this.addModuleForm.controls['code'].setValue(this.editData.code);
      this.addModuleForm.controls['libelle'].setValue(this.editData.libelle);
    }
  }
  relaodData(){
    this.Service.getTypeContrat()
      .subscribe(data=>{
        this.TypeContrat = data;
      },err=>{
        console.log(err);
      })
  }
  addTypeContrat(){
    if(!this.editData){
      if(this.addModuleForm.valid){
        
        this.Service.postTypeContrat(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('TypeContrat ajouter avec succees')
        this.addModuleForm.reset();
        this.Service.getTypeContrat();
        this.dialog.close('Ajouter TypeContrat');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateTypeContrat()
    }
  }
  updateTypeContrat(){
    this.Service.putTypeContrat(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Direction a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour TypeContrat');
        
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}