import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServiceAgence } from 'src/app/service/ServiceAgence';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Agence } from 'src/model/Agence';
import { ModelPaie } from 'src/model/ModelPaie';


@Component({
  selector: 'app-addagence',
  templateUrl: './addagence.component.html',
  styleUrls: ['./addagence.component.css']
})
export class AddagenceComponent implements OnInit {
  Banque!:ModelPaie[];
  Agence!: Agence[];
  addAgenceForm!: FormGroup;
  actionBtn: string ='Ajouter Agence' 
  actiontitle:string ='Ajouter Agence'

  constructor(private fb: FormBuilder,
    private ServiceAgence:ServiceAgence, private Service:ServicePaie,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {
    this.relaodBanque();
    this.relaodData();
    this.addAgenceForm = this.fb.group({
      nomAgence: ['', Validators.required],
      banque_id: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Agence'
      this.actionBtn =' Ajouter Agence';
      this.addAgenceForm.controls['nomAgence'].setValue(this.editData.nomAgence);
      this.addAgenceForm.controls['banque_id'].setValue(this.editData.banque.id);
    }
    
  }
  relaodData(){
    this.ServiceAgence.getAgence()
      .subscribe(data=>{
        this.Agence = data;
      },err=>{
        console.log(err);
      })
  }
  relaodBanque(){
    this.Service.getBanque()
      .subscribe(data=>{
        this.Banque = data;
      },err=>{
        console.log(err);
      })
  }
  addAgence(){
    if(!this.editData){
      if(this.addAgenceForm.valid){
        const Agence = { 
          nomAgence: this.addAgenceForm.value['nomAgence'],
            };
         const idBank = this.addAgenceForm.value['banque_id'];

        this.ServiceAgence.postAgence(Agence,idBank)
        .subscribe({
          next:(res)=>{
      alert('nom Agence ajouter avec succees')
        this.addAgenceForm.reset();
        this.dialog.close('Ajouter Agence');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateAgence()
    }
  }
  updateAgence(){

  const Agence ={
    nomAgence: this.addAgenceForm.value['nomAgence'],
    banque:{
      id:this.addAgenceForm.value['banque_id']
    }
  }
   console.log("classe =",Agence)
    this.ServiceAgence.putAgence(Agence,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Agence a ete mise a jour avec succee");
        this.addAgenceForm.reset();
        this.dialog.close('mise a jour agence');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}
