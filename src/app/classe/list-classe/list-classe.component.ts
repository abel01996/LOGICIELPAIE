import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddClasseComponent } from '../add-classe/add-classe.component';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.css']
})
export class ListClasseComponent implements OnInit {

  classe!: ModelPaie[];
  addClasseForm!: FormGroup;
  displayedColumns =['nomClasse','correspondance','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getClasse(){
  
  this.Service.getClasse().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Classe n'existe pas")
   }
  })
 
 
 }
 editClasse(element: ServicePaie){
  this.dialog.open(AddClasseComponent,{
    width:'35%',
    height: '80%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Classe'){
     this.getClasse();
   }
 })
  }

  ngOnInit(): void {
    this.getClasse();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddClasseComponent, {
        width: '700px',
        height:'80%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Classe'){
            this.getClasse();
          }
        })
    }
    deleteClasse(id:number) {

      this.Service.deleteClasse(id)
      .subscribe({
        next:(res)=>{
          alert('Classe supprimer avec succee')
          this.getClasse();
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
