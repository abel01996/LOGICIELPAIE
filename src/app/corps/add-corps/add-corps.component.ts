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
  Echelon!:ModelPaie[];
  Corps!: ModelPaie[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Corps' 
  actiontitle:string ='Ajouter Corps'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<AddBanqueComponent>) { }

  ngOnInit(): void {
    this.relaodEchelon();
    this.relaodData();
    this.addModuleForm = this.fb.group({
      code: ['', Validators.nullValidator],
      nomCorps: ['', Validators.required],
      echelon_id:['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Corps'
      this.actionBtn =' Modifier Corps';
      this.addModuleForm.controls['code'].setValue(this.editData.code);
      this.addModuleForm.controls['nomCorps'].setValue(this.editData.nomCorps);
      this.addModuleForm.controls['echelon_id'].setValue(this.editData.echelon.id);
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

  relaodEchelon(){
    this.Service.getEchelon()
      .subscribe(data=>{
        this.Echelon = data;
      },err=>{
        console.log(err);
      })
  }
  addCorps(){
    if(!this.editData){
      if(this.addModuleForm.valid){
        const Corps ={
               code: this.addModuleForm.value['code'],
               nomCorps:this.addModuleForm.value['nomCorps'] };
         const idEchelon= this.addModuleForm.value['echelon_id'];

            //  console.log("Corp = ", Corps, "idEchelon =", idEchelon)

        this.Service.postCorps(Corps,idEchelon)
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

    const Corps ={
      code: this.addModuleForm.value['code'],
      nomCorps:this.addModuleForm.value['nomCorps'], 
      echelon: {
        id: this.addModuleForm.value['echelon_id']
      }
    };
    // console.log("Corp = ", Corps)
    this.Service.putCorps(Corps,this.editData.id)
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