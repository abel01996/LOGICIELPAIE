import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule ,MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employe } from 'src/model/Employe';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  employer!: Employe[];
  addEmployeForm!: FormGroup
  actionBtn: string ='Ajouter employe' 
  actiontitle:string ='Ajouter Employe'

 

  constructor(private fb: FormBuilder,
     private paramService:ServiceEmployer, 
     @Inject(MAT_DIALOG_DATA) public editData: any,
     private dialog : MatDialogRef<AddemployeComponent>,
     private router:Router) {
  }
  ngOnInit() {
    this.relaodData();
    this.addEmployeForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaissance:['', Validators.required],
      cni:['', Validators.required],
      
    });

    if(this.editData){
      this.actiontitle='Modifier employe'
      this.actionBtn =' Modifier employe';
      this.addEmployeForm.controls['matricule'].setValue(this.editData.matricule);
      this.addEmployeForm.controls['nom'].setValue(this.editData.nom);
      this.addEmployeForm.controls['prenom'].setValue(this.editData.prenom);
      this.addEmployeForm.controls['adresse'].setValue(this.editData.adresse);
      this.addEmployeForm.controls['dateNaissance'].setValue(this.editData.dateNaissance);
      this.addEmployeForm.controls['cni'].setValue(this.editData.cni);
    
    }
  }

  relaodData(){
    this.paramService.getEmployer()
      .subscribe(data=>{
        this.employer = data;
      },err=>{
        console.log(err);
      })
  }

 addEmployer(){
    if(!this.editData){
      if(this.addEmployeForm.valid){

        this.paramService.postEmployer(this.addEmployeForm.value)
        .subscribe({
          next:(res)=>{
      alert('employer ajouter avec succees')
        this.addEmployeForm.reset();
         this.dialog.close('Ajouter employe');

          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateEmployer()
    }
  }
    updateEmployer(){
      this.paramService.putEmployer(this.addEmployeForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{

          alert("employer mise a jour avec succee");
          this.addEmployeForm.reset();
          this.dialog.close('mise a jour employe');

        },
        error:()=>{

          alert('echec lors du mise a jour')
        }
      })
      }

      closeDialog() {

      }
    
  }

  