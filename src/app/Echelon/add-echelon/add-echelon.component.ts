import { Component,Inject,inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-echelon',
  templateUrl: './add-echelon.component.html',
  styleUrls: ['./add-echelon.component.css']
})
export class AddEchelonComponent implements OnInit {

  Echelon!: ModelPaie[];
  Hierarchie!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Echelon' 
  actiontitle:string ='Ajouter Echelon'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddEchelonComponent>) { }

  ngOnInit(): void {
    this. SelectData();
    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomEchelon: ['', Validators.required],
      correspondances: ['', Validators.required],
      hierarchie_id: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Echelon'
      this.actionBtn =' Modifier Echelon';
      this.addModuleForm.controls['nomEchelon'].setValue(this.editData.nomEchelon);
      this.addModuleForm.controls['hierarchie_id'].setValue(this.editData.hierarchie.id);
      this.addModuleForm.controls['correspondances'].setValue(this.editData.correspondances);
    
    }
  }
  relaodData(){
    this.Service.getEchelon()
      .subscribe(data=>{
        this.Echelon = data;
      },err=>{
        console.log(err);
      })
  }
 SelectData(){
    this.Service.getHierarchie()
      .subscribe(data=>{
        this.Hierarchie = data;
      },err=>{
        console.log(err);
      })
  }
  addEchelon(){
    if(!this.editData){
      if(this.addModuleForm.valid){
        const echelon = { 
          nomEchelon: this.addModuleForm.value['nomEchelon'],
          correspondances: this.addModuleForm.value['correspondances'] 
            };
         const idHierrchie = this.addModuleForm.value['hierarchie_id'];
        
        this.Service.postEchelon(echelon,idHierrchie)
        .subscribe({
          next:(res)=>{
      alert('nom Echelon ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Echelon');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEchelon()
    }
  }
  updateEchelon(){

    const echelon = { 
      nomEchelon: this.addModuleForm.value['nomEchelon'],
      correspondances: this.addModuleForm.value['correspondances'],
      hierarchie: {
        id:this.addModuleForm.value['hierarchie_id']
      }
    };
    this.Service.putEchelon(echelon,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Echelon a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Echelon');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}