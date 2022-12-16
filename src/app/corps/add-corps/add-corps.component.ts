import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBanqueComponent } from 'src/app/banque/add-banque/add-banque.component';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-corps',
  templateUrl: './add-corps.component.html',
  styleUrls: ['./add-corps.component.css']
})
export class AddCorpsComponent implements OnInit {
  Corps!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Corps' 
  actiontitle:string ='Ajouter Corps'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      code: ['', Validators.nullValidator],
      nomCorps: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Corps'
      this.actionBtn =' Modifier Corps';
      this.addModuleForm.controls['nomCorps'].setValue(this.editData.nomCorps);
    }
  }
  relaodData(){
    this.Service.getCorps()
      .subscribe(data=>{
        this.Corps = data;
      },err=>{
        console.log(err);
      })
  }
  addCorps(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postCorps(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Corps ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Corps');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateCorps()
    }
  }
  updateCorps(){
    this.Service.putCorps(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("votre Corps a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Corps');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}