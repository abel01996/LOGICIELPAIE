import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-add-paie-service-app',
  templateUrl: './add-paie-service-app.component.html',
  styleUrls: ['./add-paie-service-app.component.css']
})
export class AddPaieServiceAppComponent implements OnInit {

  Serviceapp!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Service' 
  actiontitle:string ='Ajouter Service'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddPaieServiceAppComponent>) { }

  ngOnInit(): void {

    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomService: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Service'
      this.actionBtn =' Modifier Service';
      this.addModuleForm.controls['nomService'].setValue(this.editData.nomService);
    }
  }
  relaodData(){
    this.Service.getService()
      .subscribe(data=>{
        this.Serviceapp = data;
      },err=>{
        console.log(err);
      })
  }
  addService(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        this.Service.postService(this.addModuleForm.value)
        .subscribe({
          next:(res)=>{
      alert('nom Service ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Service');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateService()
    }
  }
  updateService(){
    this.Service.putService(this.addModuleForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Service a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jour Service');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }

}