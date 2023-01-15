import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

   Departement: Array<ModelPaie> = new Array<ModelPaie>();
   Direction:ModelPaie[] =[];
  addModuleForm!: FormGroup;
  actionBtn: string ='Ajouter Departement' 
  actiontitle:string ='Ajouter Departement'

  constructor(private fb: FormBuilder,
    private Service:ServicePaie, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog : MatDialogRef<DepartementComponent>) { }

  ngOnInit(): void {
    this.onSelect();
    this.relaodData();
    this.addModuleForm = this.fb.group({
      nomDepartement: ['', Validators.required],
      direction_id: ['', Validators.required]
    });

    if(this.editData){
      this.actiontitle='Modifier Departement'
      this.actionBtn =' Modifier Departement';
      this.addModuleForm.controls['nomDepartement'].setValue(this.editData.nomDepartement);
      this.addModuleForm.controls['direction_id'].setValue(this.editData.direction.id)
    }
  }
  relaodData(){
    this.Service.getDepartement()
      .subscribe(data=>{
        this.Departement = data;
      },err=>{
        console.log(err);
      })
  }
  onSelect(){
    this.Service.getDirection()
      .subscribe(data=>{
        this.Direction = data;
      },err=>{
        console.log(err);
      })
  }
 
  addDepartement(){
    if(!this.editData){
      if(this.addModuleForm.valid){

        const departement = { nomDepartement: this.addModuleForm.value['nomDepartement']};
        const idDirection = this.addModuleForm.value['direction_id'];
        this.Service.postDepartement(departement, idDirection)
        .subscribe({
          next:(res)=>{
      alert('nomDepartement ajouter avec succees')
        this.addModuleForm.reset();
        this.dialog.close('Ajouter Departement');
          },
          error:()=>{
            alert("errreur lors de l'enregistrement")
          }
        })
      }
    }
    else{
      this.updateDepartement()
    }
  }
  updateDepartement(){

    const departement = { 
      nomDepartement: this.addModuleForm.value['nomDepartement'],
      direction: {
        id: this.addModuleForm.value['direction_id']
      }
    };

    this.Service.putDepartement(departement,this.editData.id)
    .subscribe({
      next:(res)=>{

        alert("Ton Departement a ete mise a jour avec succee");
        this.addModuleForm.reset();
        this.dialog.close('mise a jourDepartement');
      },
      error:()=>{

        alert('echec lors du mise a jour')
      }
    })
    }
    closeDialog() {

    }
//     // onChangeDirection(event){
//       //this.directionChoisi = event.value;
//       this.addModuleForm.control['direction_id'].setValue(event.value);

//     // }
// //     Directions: Array<ModelPaie> = new Array<ModelPaie>();
// //  clientChoisi: any;
// // public directCtrl: FormControl = new FormControl();
// //  public directFilterCtrl: FormControl = new FormControl();
// //  public filteredDirection: ReplaySubject<ModelPaie[]> = new ReplaySubject<ModelPaie[]>();
 
// @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect | undefined;
// this.directFilterCtrl.valueChanges
//  .pipe(takeUntil(this._onDestroy))
//       .subscribe(() => {
//         this.filteredDirection();
//       });
//  const protected_onDestroy = new Subject<void>();
    

}