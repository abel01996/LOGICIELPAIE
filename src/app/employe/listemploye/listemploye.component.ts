import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddFamilleComponent } from 'src/app/Famille/add-famille/add-famille.component';
import { EnfantComponent } from 'src/app/Famille/enfant/enfant.component';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { ServiceFamille } from 'src/app/service/ServiceFamile';
import { Employe } from 'src/model/Employe';
import { Famille } from 'src/model/Famillle';
import { AddemployeComponent } from '../addemploye/addemploye.component';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit { 

  employer!: Employe[];
  displayedColumns =['matricule','nom','prenom','adresse' ,'dateNaissance','etatCivil_id', 'cni','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceEmployer:ServiceEmployer,private ServiceEpouse:ServiceFamille,
   private dialog: MatDialog){}
   
  // ngAfterViewInit(): void {

  //   throw new Error('Method not implemented.');
  // }

 ngOnInit(){
  this.getEmployer();

}


 public getEmployer(){

 this.ServiceEmployer.getEmployer().subscribe({

  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("cette Agent n'existe pas")
  }
 })


}

editEmployer(element: Employe){
  
this.dialog.open(AddemployeComponent,{
    width:'700px',
    height: '160%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Agent'){
     this.getEmployer();
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

  this.ServiceEmployer.deleteEmployer(id)
  .subscribe({
    next:(res)=>{
      alert(' Agent supprimer avec succee')
      this.getEmployer();
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
openDialog() {
  const dialogRef = this.dialog.open(AddemployeComponent, {
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter Agent'){
        this.getEmployer();
      }
    })
}
openDialogEpouse(element: any) {
  console.log('Here', element)
  localStorage.setItem('element', JSON.stringify(element));
  const dialogRef = this.dialog.open(AddFamilleComponent,{ 
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter Epouse'){
        this.getEmployer();
      }
    })
}
openDialogEnfant() {
  const dialogRef = this.dialog.open(EnfantComponent,{ 
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter Enfant'){
        this.getEmployer();
      }
    })
}

}
