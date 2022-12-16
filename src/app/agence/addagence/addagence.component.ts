import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServiceAgence } from 'src/app/service/ServiceAgence';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Agence } from 'src/model/Agence';


@Component({
  selector: 'app-addagence',
  templateUrl: './addagence.component.html',
  styleUrls: ['./addagence.component.css']
})
export class AddagenceComponent implements OnInit {

  Agence!: Agence[];
  addAgenceForm!: FormGroup;
  actionBtn: string ='Ajouter Agence' 
  actiontitle:string ='Ajouter Agence'

  constructor(private fb: FormBuilder,
    private ServiceAgence:ServiceAgence, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addAgenceForm = this.fb.group({
      nomAgence: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Agence'
      this.actionBtn =' Ajouter Agence';
      this.addAgenceForm.controls['nomAgence'].setValue(this.editData.nomAgence);
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
  addAgence(){
    if(!this.editData){
      if(this.addAgenceForm.valid){

        this.ServiceAgence.postAgence(this.addAgenceForm.value)
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
    this.ServiceAgence.putAgence(this.addAgenceForm.value,this.editData.id)
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
