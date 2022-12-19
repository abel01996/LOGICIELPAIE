import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  Direction!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Direction' 
  actiontitle:string ='Ajouter Direction'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<DirectionComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomDirection: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Direction'
      this.actionBtn =' Modifier Direction';
      this.addModuleForm.controls['nomDirection'].setValue(this.editData.nomDirection);
    }
  }
  relaodData(){
    this.Service.getDirection()
      .subscribe(data=>{
        this.Direction = data;
      },err=>{
        console.log(err);
      })
  }
  addDirection(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postDirection(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nomDirection ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Direction');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateDirection()
    }
  }
  updateDirection(){
    this.Service.putDirection(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Direction a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Direction');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}