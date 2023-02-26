
import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FichePaieService } from 'src/app/service/FichePaieService';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Employe } from 'src/model/Employe';
import { DetailFichePaieComponent } from '../detail-fiche-paie/detail-fiche-paie.component';
import { ListFichePaieComponent } from '../list-fiche-paie/list-fiche-paie.component';


@Component({
  selector: 'app-add-fiche-paie',
  templateUrl: './add-fiche-paie.component.html',
  styleUrls: ['./add-fiche-paie.component.css']

})
  
export class AddFichePaieComponent implements OnInit {
  
  FichePaie!: any;
  displayedColumns =['matricule','nom','prenom','etat_civil' ,'type_paie','mode_paie', 'nom_banque','num_compte','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Servicefiche:FichePaieService,
   private dialog: MatDialog, private router: Router){}
   
  // ngAfterViewInit(): void {

  //   throw new Error('Method not implemented.');
  // }

 ngOnInit(){
  this.getFichePaie();

}


 public getFichePaie(){

 this.Servicefiche.getFichePaie().subscribe({

  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
    // this.ServiceEpouse.getEpouse();
  },
  error:(err)=>{
    alert("cette Agent n'existe pas")
  }
 })


}

editEmployer(element: Employe){
  
this.dialog.open(DetailFichePaieComponent,{
    width:'6200px',
    height: '460%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Agent'){
     this.getFichePaie();
   }
   
 })

}
// editEpouse(element:Famille){
  
//   this.dialog.open(AddFamilleComponent,{
//       width:'700px',
//       height: '160%',
//       data: element
//     }).afterClosed().subscribe(val =>{
//       if(val==='mise a jour Agent'){
//        this.getEmployer();
//      }
     
//    })
  
//   }
  
deleteEmployer(id:number) {

  this.Servicefiche.deleteContrat(id)
  .subscribe({
    next:(res)=>{
      alert(' Agent supprimer avec succee')
      this.getFichePaie();
    },
    error:()=>{
      alert('erreur lors de le suppression')
    }
  })
}
 
applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}




   
}



