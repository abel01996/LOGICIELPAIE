import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddStatutComponent } from '../add-statut/add-statut.component';

@Component({
  selector: 'app-list-statut',
  templateUrl: './list-statut.component.html',
  styleUrls: ['./list-statut.component.css']
})
export class ListStatutComponent implements OnInit {
  Statutapp!: ModelPaie[];
  addStatutForm!: FormGroup;
  displayedColumns =['code','statutEmploye','correspondance','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getStatut(){
  
  this.Service.getStatut().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Statut n'existe pas")
   }
  })
 
 
 }
 editStatut(element: ServicePaie){
  this.dialog.open(AddStatutComponent,{
    width:'35%',
    height: '80%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Statut'){
     this.getStatut();
   }
 })
  }

  ngOnInit(): void {
    this.getStatut();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddStatutComponent, {
        width: '700px',
        height:'80%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Statut'){
            this.getStatut();
          }
        })
    }
    deleteStatut(id:number) {

      this.Service.deleteStatut(id)
      .subscribe({
        next:(res)=>{
          alert('Statut supprimer avec succee')
          this.getStatut();
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
