import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { Employe } from 'src/model/Employe';
import { AddemployeComponent } from '../addemploye/addemploye.component';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit { 
  
  employer!: Employe[];
  displayedColumns =['matricule','nom','prenom','adresse','dateNaissance', 'cni','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceEmployer:ServiceEmployer,
   private dialog: MatDialog){}
   
  ngAfterViewInit(): void {

    throw new Error('Method not implemented.');
  }

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
    alert("cette employer n'existe pas")
  }
 })


}

editEmployer(element: Employe){
  
this.dialog.open(AddemployeComponent,{
    width:'35%',
    height: '160%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour employe'){
     this.getEmployer();
   }
 })

}

deleteEmployer(id:number) {

  this.ServiceEmployer.deleteEmployer(id)
  .subscribe({
    next:(res)=>{
      alert('Employer supprimer avec succee')
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
       if(val==='Ajouter employe'){
        this.getEmployer();
      }
    })
}
}

