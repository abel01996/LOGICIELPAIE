import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceAgence } from 'src/app/service/ServiceAgence';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { Agence } from 'src/model/Agence';
import { AddagenceComponent } from '../addagence/addagence.component';

@Component({
  selector: 'app-listagence',
  templateUrl: './listagence.component.html',
  styleUrls: ['./listagence.component.css']
})
export class ListagenceComponent implements OnInit {

  Agence!: Agence[];
  addAgenceForm!: FormGroup;
  displayedColumns =['nomAgence','banque_id','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceAgence:ServiceAgence,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getAgence(){
  
  this.ServiceAgence.getAgence().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette agence n'existe pas")
   }
  })
 
 
 }
 editAgence(element: ServicePaie){
  this.dialog.open(AddagenceComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour agence'){
     this.getAgence();
   }
 })
  }

  ngOnInit(): void {
    this.getAgence();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddagenceComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Agence'){
            this.getAgence();
          }
        })
    }
    deleteAgence(id:number) {

      this.ServiceAgence.deleteAgence(id)
      .subscribe({
        next:(res)=>{
          alert('Agence supprimer avec succee')
          this.getAgence();
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
