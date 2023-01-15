import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { TypeContratComponent } from '../type-contrat/type-contrat.component';

@Component({
  selector: 'app-list-type-contrat',
  templateUrl: './list-type-contrat.component.html',
  styleUrls: ['./list-type-contrat.component.css']
})
export class ListTypeContratComponent implements OnInit {

 TypeContrat!: ModelPaie[];
  addDirectionForm!: FormGroup;
  displayedColumns =['code','libelle','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getTypeContrat(){
  
  this.Service.getTypeContrat().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette TypeContrat n'existe pas")
   }
  })
 
 
 }
 editTypeContrat(element: ServicePaie){
  this.dialog.open(TypeContratComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour TypeContrat'){
     this.getTypeContrat();
   }
 })
  }

  ngOnInit(): void {
    this.getTypeContrat();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(TypeContratComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter TypeContrat'){
            this.getTypeContrat();
          }
        })
    }
    deleteTypeContrat(id:number) {

      this.Service.deleteTypeContrat(id)
      .subscribe({
        next:(res)=>{
          alert('TypeContrat supprimer avec succee')
          this.getTypeContrat();
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
