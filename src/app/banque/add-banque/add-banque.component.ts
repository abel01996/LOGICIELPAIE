import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-banque',
  templateUrl: './add-banque.component.html',
  styleUrls: ['./add-banque.component.css']
})
export class AddBanqueComponent implements OnInit {
  banque!: ModelPaie[];
  addBanqueForm!: FormGroup;
  actionBtn: string ='Ajouter Banque' 
  actiontitle:string ='Ajouter Banque'

  constructor(private fb: FormBuilder,
    private ServiceBanque:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addBanqueForm = this.fb.group({
      code: ['', Validators.nullValidator],
      nomBanque: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier banque'
      this.actionBtn =' Modifier banque';
      this.addBanqueForm.controls['code'].setValue(this.editData.code);
      this.addBanqueForm.controls['nomBanque'].setValue(this.editData.nomBanque);
    }
  }
  relaodData(){
    this.ServiceBanque.getBanque()
      .subscribe(data=>{
        this.banque = data;
      },err=>{
        console.log(err);
      })
  }
  addBanque(){
    if(!this.editData){
      if(this.addBanqueForm.valid){

        this.ServiceBanque.postBanque(this.addBanqueForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom banque ajouter avec succees')
        this.addBanqueForm.reset();
        this.dialog.close('Ajouter Banque');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateBanque()
    }
  }
  updateBanque(){
    this.ServiceBanque.putBanque(this.addBanqueForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ta banque a ete mise a jour avec succee");
        this.addBanqueForm.reset();
        this.dialog.close('mise a jour banque');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}
