import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {

  rubrique!:any
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Rubrique' 
  actiontitle:string ='Ajouter Rubrique'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<RubriqueComponent>) { }

  ngOnInit(): void {
   
    this.relaodData();
    this.addModuleForm = this.fb.group({
      codeFiche: ['', Validators.required],
      rubriqueFiche: ['', Validators.required],
      montantFiche: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier rubrique'
      this.actionBtn =' Modifier rubrique';
      this.addModuleForm.controls['codeFiche'].setValue(this.editData.codeFiche);
      this.addModuleForm.controls['rubriqueFiche'].setValue(this.editData.rubriqueFiche);
      this.addModuleForm.controls['montantFiche'].setValue(this.editData.montantFiche);
    
    }
  }
  relaodData(){
    this.Service.getRubriqueFiche()
      .subscribe(data=>{
        this.rubrique = data;
      },err=>{
        console.log(err);
      })
  }

  addRubrique(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        const rubrique = { 
          codeFiche: this.addModuleForm.value['codeFiche'],
          rubriqueFiche: this.addModuleForm.value['rubriqueFiche'],
          montantFiche: this.addModuleForm.value['montantFiche'] 

            };
        console.log("log",rubrique);
        this.Service.postRubriqueFiche(rubrique)
        .subscribe({
          next:(res)=>{
      alert('nom Rubrique ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Rubrique');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateRubrique()
    }
  }
  updateRubrique(){

    const rubrique = { 
     
      codeFiche: this.addModuleForm.value['codeFiche'],
      rubriqueFiche: this.addModuleForm.value['rubriqueFiche'],
      montantFiche: this.addModuleForm.value[' montantFiche'] 
    };
    this.Service.putRubriqueFiche(rubrique,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Rubrique a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Rubrique');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}