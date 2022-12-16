import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddEtatCivilComponent } from '../add-etat-civil/add-etat-civil.component';

@Component({
  selector: 'app-list-etat-civil',
  templateUrl: './list-etat-civil.component.html',
  styleUrls: ['./list-etat-civil.component.css']
})
export class ListEtatCivilComponent implements OnInit {

  EtatCivil!: ModelPaie[];
  addEtatCivilForm!: FormGroup;
  displayedColumns =['etatCivil','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getEtatCivil(){
  
  this.Service.getEtatCivil().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette EtatCivil n'existe pas")
   }
  })
 
 
 }
 editEtatCivil(element: ServicePaie){
  this.dialog.open(AddEtatCivilComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour EtatCivil'){
     this.getEtatCivil();
   }
 })
  }

  ngOnInit(): void {
    this.getEtatCivil();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddEtatCivilComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter EtatCivil'){
            this.getEtatCivil();
          }
        })
    }
    deleteEtatCivil(id:number) {

      this.Service.deleteEtatCivil(id)
      .subscribe({
        next:(res)=>{
          alert('EtatCivil supprimer avec succee')
          this.getEtatCivil();
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
