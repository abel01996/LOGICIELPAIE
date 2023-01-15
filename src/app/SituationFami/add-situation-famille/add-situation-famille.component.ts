 import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Inject, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SituaFamilleService } from 'src/app/service/SituaFamilleService';
import { TreeService } from 'src/app/service/TreeService';
import { ModelPaie } from 'src/model/ModelPaie';
import { SituaFamille } from 'src/model/SituaFamille';
import { TodoItemNode } from 'src/model/Treeview';






@Component({
  selector: 'app-add-situation-famille',
  templateUrl: './add-situation-famille.component.html',
  styleUrls: ['./add-situation-famille.component.css']
})


export class AddSituationFamilleComponent implements OnInit {

//   treeControl = new NestedTreeControl<TodoItemNode>(node => node.children);
//   dataSource = new MatTreeNestedDataSource<TodoItemNode>();
//   TREE_DATA: TodoItemNode[] = [];
  
// // direction!:ModelPaie[];
 
// // //   // employer!: SituaFamille[];
// // //   // addEmployeForm!: FormGroup
// // //   // actionBtn: string ='Ajouter Situation Familliale' 
// // //   // actiontitle:string ='Ajouter Situation Familliale'
constructor( private service:TreeService){
 
}

    ngOnInit(): void {
      // this.service.getTree();
    }
    
    // hasChild = (_: number, node: TodoItemNode) => !!node.children && node.children.length > 0;
//   this.service.getDirect().pipe( direction => this.direction = direction)
//   // throw new Error('Method not implemented.');
// }
// //   constructor(private fb: FormBuilder,
// //      private paramService:SituaFamilleService, 
// //      @Inject(MAT_DIALOG_DATA) public editData: any,
// //      private dialog : MatDialogRef<AddSituationFamilleComponent>,
// //     ) {
// //   }
// //   ngOnInit() {
// //     // this.relaodData();
// //     // this.addEmployeForm = this.fb.group({
// //     //   nbrEpouse: ['', Validators.required],
// //     //   nbrEnfant: ['', Validators.required],
// //     //   nbrPartFical: ['', Validators.required],
// //     //   nbrPartImpot: ['', Validators.required],
// //     //   nbrDenfantPrest:['', Validators.required],
// //     //   totalEnfant:['', Validators.required],
// //     //   jourBase:['', Validators.required],
// //     //   nbreJourPresence:['', Validators.required],
      
// //     // });

// //     // if(this.editData){
// //     //   this.actiontitle='Modifier Situation Familliale'
// //     //   this.actionBtn =' Modifier Situation Familliale';
// //     //   this.addEmployeForm.controls['nbrEpouse'].setValue(this.editData.nbrEpouse);
// //     //   this.addEmployeForm.controls['nbrEnfant'].setValue(this.editData.nbrEnfant);
// //     //   this.addEmployeForm.controls['nbrPartFical'].setValue(this.editData.nbrPartFical);
// //     //   this.addEmployeForm.controls['nbrPartImpot'].setValue(this.editData.nbrPartImpot);
// //     //   this.addEmployeForm.controls['nbrDenfantPrest'].setValue(this.editData.nbrDenfantPrest);
// //     //   this.addEmployeForm.controls['totalEnfant'].setValue(this.editData.totalEnfant);
// //     //   this.addEmployeForm.controls['jourBase'].setValue(this.editData.jourBase);
// //     //   this.addEmployeForm.controls['nbreJourPresence'].setValue(this.editData.nbreJourPresence);
    
// //     // }
// //   }

// // //   relaodData(){
// // //     this.paramService.getSituaFamille()
// // //       .subscribe(data=>{
// // //         this.employer = data;
// // //       },err=>{
// // //         console.log(err);
// // //       })
// // //   }

// // //  addSituaFamille(){
// // //     if(!this.editData){
// // //       if(this.addEmployeForm.valid){

// // //         this.paramService.postSituaFamille(this.addEmployeForm.value)
// // //         .subscribe({
// // //           next:(res)=>{
// // //       alert('Situation Familliale ajouter avec succees')
// // //         this.addEmployeForm.reset();
// // //          this.dialog.close('Ajouter Situation Familliale');

// // //           },
// // //           error:()=>{
// // //             alert("errreur lors de l'enregistrement")
// // //           }
// // //         })
// // //       }
// // //     }
// // //     else{
// // //       this.updateSituaFamille()
// // //     }
// // //   }
// // //     updateSituaFamille(){
// // //       this.paramService.putSituaFamille(this.addEmployeForm.value,this.editData.id)
// // //       .subscribe({
// // //         next:(res)=>{

// // //           alert("Situation Familliale mise a jour avec succee");
// // //           this.addEmployeForm.reset();
// // //           this.dialog.close('mise a jour Situation Familliale');

// // //         },
// // //         error:()=>{

// // //           alert('echec lors du mise a jour')
// // //         }
// // //       })
// // //       }

// // //       closeDialog() {

// // //       }
    
  }

  