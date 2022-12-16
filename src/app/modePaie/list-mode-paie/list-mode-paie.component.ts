import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddModePaieComponent } from '../add-mode-paie/add-mode-paie.component';

@Component({
  selector: 'app-list-mode-paie',
  templateUrl: './list-mode-paie.component.html',
  styleUrls: ['./list-mode-paie.component.css']
})
export class ListModePaieComponent implements OnInit {

  ModePaie!: ModelPaie[];
  addModePaieForm!: FormGroup;
  displayedColumns =['modePaie','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getModePaie(){
  
  this.Service.getModePaie().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette ModePaie n'existe pas")
   }
  })
 
 
 }
 editModePaie(element: ServicePaie){
  this.dialog.open(AddModePaieComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour ModePaie'){
     this.getModePaie();
   }
 })
  }

  ngOnInit(): void {
    this.getModePaie();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddModePaieComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter ModePaie'){
            this.getModePaie();
          }
        })
    }
    deleteModePaie(id:number) {

      this.Service.deleteModePaie(id)
      .subscribe({
        next:(res)=>{
          alert('ModePaie supprimer avec succee')
          this.getModePaie();
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
