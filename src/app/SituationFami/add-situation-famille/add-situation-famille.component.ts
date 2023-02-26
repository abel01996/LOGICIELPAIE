 import { BooleanInput } from '@angular/cdk/coercion';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Inject, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from 'primeng/api';
import { ServicePaie } from 'src/app/service/ServicePaie';
// import { MessageService, TreeNode } from 'primeng/api';
import { SituaFamilleService } from 'src/app/service/SituaFamilleService';
import { TreeService } from 'src/app/service/TreeService';
import { ModelPaie } from 'src/model/ModelPaie';
import { SituaFamille } from 'src/model/SituaFamille';
import { TodoItemNode } from 'src/model/Treeview';


export enum SalaryMultiplication {
  smi = 0,
  ni = '',
  vpi = 51.429,
  ir = 14,
  ie = 30,
  il = '',
  cps = 20,
  augs05 = '',
  augs089 = '',
  augsolde = '',
  aug2002 = '',
  augs2000 = '',
  augs1994 = '',
 impotsalaire  = '',
  trimf = '',

}
export class SalaryCalculator {

  totalSalaire!: number;

  constructor(totalSalaire:number){
    this.totalSalaire = totalSalaire;
  }
 
}


@Component({
  selector: 'app-add-situation-famille',
  templateUrl: './add-situation-famille.component.html',
  styleUrls: ['./add-situation-famille.component.css']
})

export class AddSituationFamilleComponent implements OnInit {
 

 rubrique:any;
 empmatricule:any
 addModuleForm!: FormGroup;
 totalSalaire!:SalaryCalculator
 SalaryMultiplication!:SalaryMultiplication


 constructor(private fb:FormBuilder, private service:ServicePaie){}
 

  ngOnInit(): void { 
    this.empmatricule =this.getMatricule();
   this.getListRubrique();
   this.addModuleForm = this.fb.group({
    employe_id:[this.empmatricule.matricule, Validators.required],
     periode:['', Validators.required]
  });

  }


  getListRubrique(){

    this.service.getRubriqueFiche().subscribe(data=>{
    
      this.rubrique = data
      console.log('log',this.rubrique[1])
    }
    ,err=>{
      console.log(err);
    })
    
  }
  getMatricule(){
    let element = localStorage.getItem('element');
    if(element) {
      const el: any  = JSON.parse(element);
      return el;
    }
    return null;
  }
  getTotalSalaire(){
    
    const code =this.rubrique;
    for(let i = 0; i < code.lenght; i++){
     
      if(i=== code.lenght[0]){
      // let smi : number = (this.totalSalaire)
      }
    }

 }
}