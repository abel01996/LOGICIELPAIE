import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddPaieServiceAppComponent } from '../add-paie-service-app/add-paie-service-app.component';

@Component({
  selector: 'app-list-paie-service-app',
  templateUrl: './list-paie-service-app.component.html',
  styleUrls: ['./list-paie-service-app.component.css']
})
export class ListPaieServiceAppComponent implements OnInit {
  Serviceapp!: ModelPaie[];
  addServiceForm!: FormGroup;
  displayedColumns =['nomService','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getService(){
  
  this.Service.getService().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Service n'existe pas")
   }
  })
 
 
 }
 editService(element: ServicePaie){
  this.dialog.open(AddPaieServiceAppComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Service'){
     this.getService();
   }
 })
  }

  ngOnInit(): void {
    this.getService();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddPaieServiceAppComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Service'){
            this.getService();
          }
        })
    }
    deleteService(id:number) {

      this.Service.deleteService(id)
      .subscribe({
        next:(res)=>{
          alert('Service supprimer avec succee')
          this.getService();
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
