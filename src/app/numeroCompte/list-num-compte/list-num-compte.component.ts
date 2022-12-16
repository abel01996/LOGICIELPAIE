import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddNumeroCompteComponent } from '../add-numero-compte/add-numero-compte.component';

@Component({
  selector: 'app-list-num-compte',
  templateUrl: './list-num-compte.component.html',
  styleUrls: ['./list-num-compte.component.css']
})
export class ListNumCompteComponent implements OnInit {
  NumCompte!: ModelPaie[];
  addNumCompteForm!: FormGroup;
  displayedColumns =['numCompte','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getNumCompte(){
  
  this.Service.getNumCompte().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette NumCompte n'existe pas")
   }
  })
 
 
 }
 editNumCompte(element: ServicePaie){
  this.dialog.open(AddNumeroCompteComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour NumCompte'){
     this.getNumCompte();
   }
 })
  }

  ngOnInit(): void {
    this.getNumCompte();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddNumeroCompteComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter NumCompte'){
            this.getNumCompte();
          }
        })
    }
    deleteNumCompte(id:number) {

      this.Service.deleteNumCompte(id)
      .subscribe({
        next:(res)=>{
          alert('NumCompte supprimer avec succee')
          this.getNumCompte();
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
