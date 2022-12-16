import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddTypePaieComponent } from '../add-type-paie/add-type-paie.component';

@Component({
  selector: 'app-list-type-paie',
  templateUrl: './list-type-paie.component.html',
  styleUrls: ['./list-type-paie.component.css']
})
export class ListTypePaieComponent implements OnInit {

  TypePaieapp!: ModelPaie[];
  addTypePaieForm!: FormGroup;
  displayedColumns =['typePaie','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getPaie(){
  
  this.Service.getTypepaie().subscribe({
 next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette TypePaie n'existe pas")
   }
  })
 
 
 }
 editTypePaie(element: ServicePaie){
  this.dialog.open(AddTypePaieComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour TypePaie'){
     this.getPaie();
   }
 })
  }

  ngOnInit(): void {
    this.getPaie();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddTypePaieComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter TypePaie'){
            this.getPaie();
          }
        })
    }
    deleteTypePaie(id:number) {

      this.Service.deleteTypePaie(id)
      .subscribe({
        next:(res)=>{
          alert('TypePaie supprimer avec succee')
          this.getPaie();
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
