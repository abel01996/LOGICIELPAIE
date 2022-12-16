import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classe!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Classe' 
  actiontitle:string ='Ajouter Classe'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomClasse: ['', Validators.required],
      correspondance: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Classe'
      this.actionBtn =' Modifier Classe';
      this.addModuleForm.controls['nomClasse'].setValue(this.editData.nomClasse);
      this.addModuleForm.controls['correspondance'].setValue(this.editData.correspondance);
    }
  }
  relaodData(){
    this.Service.getClasse()
      .subscribe(data=>{
        this.classe = data;
      },err=>{
        console.log(err);
      })
  }
  addClasse(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postClasse(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Classe ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Classe');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateClasse()
    }
  }
  updateClasse(){
    this.Service.putClasse(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Classe a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Classe');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}