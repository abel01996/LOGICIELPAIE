import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employe } from 'src/model/Employe';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { Contrat } from 'src/model/Contrat';
import { ContratService } from 'src/app/service/ContratService';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {
  EtatCivil!: ModelPaie[];
  contrat!: Contrat[];
  employer!: Employe[];
  addEmployeForm!: FormGroup;
  addEmployeForm1!: FormGroup;
  actionBtn: string = 'Ajouter Agent'
  actiontitle: string = 'Ajouter Agent'



  constructor(private fb: FormBuilder,
    private paramService: ServiceEmployer, private Service: ContratService, private ServiceEtatcivile: ServicePaie,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog: MatDialogRef<AddemployeComponent>,
    private router: Router) {
  }
  isOptional!: boolean;
   
  ngOnInit() {
    this.isOptional= false;
    this.relaodEtatCivil();
    this.relaodContrat();
    this.relaodData();
    this.addEmployeForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
     
      
     
    });
    this.addEmployeForm1 = this.fb.group({
      etatCivil_id: ['',Validators.required],
      dateNaissance: ['', Validators.required],
      cni: ['', Validators.required]
      
     
    })

    if (this.editData) {
      this.actiontitle = 'Modifier Agent'
      this.actionBtn = ' Modifier Agent';
      this.addEmployeForm.controls['matricule'].setValue(this.editData.matricule);
      this.addEmployeForm.controls['nom'].setValue(this.editData.nom);
      this.addEmployeForm.controls['prenom'].setValue(this.editData.prenom);
      this.addEmployeForm.controls['adresse'].setValue(this.editData.adresse);
      this.addEmployeForm1.controls['dateNaissance'].setValue(this.editData.dateNaissance);
      this.addEmployeForm1.controls['cni'].setValue(this.editData.cni);
      this.addEmployeForm1.controls['etatCivil_id'].setValue(this.editData.etatCivil.id);
      // this.addEmployeForm1.controls['nbrEpouse'].setValue(this.editData.nbrEpouse);
      // this.addEmployeForm1.controls['nbrEnfant'].setValue(this.editData.nbrEnfant);
      // this.addEmployeForm1.controls['totalEnfant'].setValue(this.editData.totalEnfant);
      

    }
  }

  relaodData() {
    this.paramService.getEmployer()
      .subscribe(data => {
        this.employer = data;
      }, err => {
        console.log(err);
      })
  }
  relaodContrat() {
    this.Service.getContrat()
      .subscribe(data => {
        this.contrat = data;
      }, err => {
        console.log(err);
      })
  }
  relaodEtatCivil() {
    this.ServiceEtatcivile.getEtatCivil()
      .subscribe(data => {
        this.EtatCivil = data;
      }, err => {
        console.log(err);
      })
  }

  addEmployer() {
    if (!this.editData) {
      if (this.addEmployeForm.valid) {

        const employer = {
          matricule: this.addEmployeForm.value['matricule'],
          nom: this.addEmployeForm.value['nom'],
          prenom: this.addEmployeForm.value['prenom'],
          adresse: this.addEmployeForm.value['adresse'],
          dateNaissance: this.addEmployeForm1.value['dateNaissance'],
          cni: this.addEmployeForm1.value['cni'],
          // nbrEpouse: this.addEmployeForm1.value['nbrEpouse'],
          // nbrEnfant: this.addEmployeForm1.value['nbrEnfant'],
          // totalEnfant: this.addEmployeForm1.value['totalEnfant'],
          etatCivil:{
            id: this.addEmployeForm1.value['etatCivil_id'],
          }
        };
        // const idContrat = (
        //   this.addEmployeForm.value['contrat_id'],
        //   this.addEmployeForm.value['etatCivil_id']);

        // console.log("employer:", employer, "id:", idContrat);

        this.paramService.postEmployer(employer)
          .subscribe({
            next: (res) => {
              alert(' Agent ajouter avec succees')
              this.addEmployeForm.reset();
              this.dialog.close('Ajouter Agent');

            },
            error: () => {
              alert("errreur lors de l'enregistrement")
            }
          })
      }
    }
    else {
      this.updateEmployer()
    }
  }
  updateEmployer() {
    const Employer = {
      matricule:this.addEmployeForm.value['matricule'],
      nom: this.addEmployeForm.value['nom'],
      prenom: this.addEmployeForm.value['prenom'],
      adresse: this.addEmployeForm.value['adresse'],
      dateNaissance: this.addEmployeForm1.value['dateNaissance'],
      cni: this.addEmployeForm1.value['cni'],
      // nbrEpouse: this.addEmployeForm1.value['nbrEpouse'],
      // nbrEnfant: this.addEmployeForm1.value['nbrEnfant'],
      // totalEnfant: this.addEmployeForm1.value['totalEnfant'],
      etatCivil: {
        id: this.addEmployeForm1.value['etatCivil_id'],
      }
    };
    console.log("Corp = ", Employer)
    this.paramService.putEmployer(Employer, this.editData.id)
      .subscribe({
        next: (res) => {

          alert("Agent mise a jour avec succee");
          this.addEmployeForm.reset();
          this.dialog.close('mise a jour Agent');

        },
        error: () => {

          alert('echec lors du mise a jour')
        }
      })
  }

  closeDialog() {

  }
  dialogopenDialog() {
    

  }

}

