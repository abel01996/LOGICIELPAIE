import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-numero-compte',
  templateUrl: './add-numero-compte.component.html',
  styleUrls: ['./add-numero-compte.component.css']
})
export class AddNumeroCompteComponent implements OnInit {

  numCompte!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter NumCompte' 
  actiontitle:string ='Ajouter NumCompte'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddNumeroCompteComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      numCompte: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier NumCompte'
      this.actionBtn =' Modifier NumCompte';
      this.addModuleForm.controls['numCompte'].setValue(this.editData.numCompte);
    }
  }
  relaodData(){
    this.Service.getNumCompte()
      .subscribe(data=>{
        this.numCompte = data;
      },err=>{
        console.log(err);
      })
  }
  addNumCompte(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postNumCompte(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom NumCompte ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter NumCompte');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateNumCompte()
    }
  }
  updateNumCompte(){
    this.Service.putNumCompte(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton NumCompte a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour NumCompte');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}