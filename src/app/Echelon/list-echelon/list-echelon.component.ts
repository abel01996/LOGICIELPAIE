import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddEchelonComponent } from '../add-echelon/add-echelon.component';

@Component({
  selector: 'app-list-echelon',
  templateUrl: './list-echelon.component.html',
  styleUrls: ['./list-echelon.component.css']
})
export class ListEchelonComponent implements OnInit {

  Echelon!: ModelPaie[];
  addEchelonForm!: FormGroup;
  displayedColumns =['nomEchelon','correspondances','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getEchelon(){
  
  this.Service.getEchelon().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Echelon n'existe pas")
   }
  })
 
 
 }
 editEchelon(element: ServicePaie){
  this.dialog.open(AddEchelonComponent,{
    width:'35%',
    height: '90%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Echelon'){
     this.getEchelon();
   }
 })
  }

  ngOnInit(): void {
    this.getEchelon();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddEchelonComponent, {
        width: '700px',
        height:'90%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Echelon'){
            this.getEchelon();
          }
        })
    }
    deleteEchelon(id:number) {

      this.Service.deleteEchelon(id)
      .subscribe({
        next:(res)=>{
          alert('Echelon supprimer avec succee')
          this.getEchelon();
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
