import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { DirectionComponent } from '../direction/direction.component';

@Component({
  selector: 'app-list-direction',
  templateUrl: './list-direction.component.html',
  styleUrls: ['./list-direction.component.css']
})
export class ListDirectionComponent implements OnInit {

  Direction!: ModelPaie[];
  addDirectionForm!: FormGroup;
  displayedColumns =['nomDirection','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getDirection(){
  
  this.Service.getDirection().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Direction n'existe pas")
   }
  })
 
 
 }
 editDirection(element: ServicePaie){
  this.dialog.open(DirectionComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Direction'){
     this.getDirection();
   }
 })
  }

  ngOnInit(): void {
    this.getDirection();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(DirectionComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Direction'){
            this.getDirection();
          }
        })
    }
    deleteDirection(id:number) {

      this.Service.deleteDirection(id)
      .subscribe({
        next:(res)=>{
          alert('Direction supprimer avec succee')
          this.getDirection();
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
