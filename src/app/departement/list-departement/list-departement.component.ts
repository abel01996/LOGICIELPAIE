import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { DepartementComponent } from '../departement/departement.component';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {

  Departement!: ModelPaie[];
  addDepartementForm!: FormGroup;
  displayedColumns =['nomDepartement','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getDepartement(){
  
  this.Service.getDepartement().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Departement n'existe pas")
   }
  })
 
 
 }
 editDepartement(element: ServicePaie){
  this.dialog.open(DepartementComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Departement'){
     this.getDepartement();
   }
 })
  }

  ngOnInit(): void {
    this.getDepartement();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(DepartementComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Departement'){
            this.getDepartement();
          }
        })
    }
    deleteDepartement(id:number) {

      this.Service.deleteDepartement(id)
      .subscribe({
        next:(res)=>{
          alert('Departement supprimer avec succee')
          this.getDepartement();
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
