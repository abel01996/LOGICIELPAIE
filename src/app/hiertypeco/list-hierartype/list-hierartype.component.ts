import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddHierarTypeComponent } from '../add-hierar-type/add-hierar-type.component';

@Component({
  selector: 'app-list-hierartype',
  templateUrl: './list-hierartype.component.html',
  styleUrls: ['./list-hierartype.component.css']
})
export class ListHierartypeComponent implements OnInit {


  Hierarchie!: ModelPaie[];
  addHierarchieForm!: FormGroup;
  displayedColumns =['nomHierarchie','correspondance','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getHierarchie(){
  
  this.Service.getHierarchie().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Hierarchie n'existe pas")
   }
  })
 
 
 }
 editHierarchie(element: ServicePaie){
  this.dialog.open(AddHierarTypeComponent,{
    width:'35%',
    height: '70%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Hierarchie'){
     this.getHierarchie();
   }
 })
  }

  ngOnInit(): void {
    this.getHierarchie();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddHierarTypeComponent, {
        width: '700px',
        height:'70%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Hierarchie'){
            this.getHierarchie();
          }
        })
    }
    deleteHierarchie(id:number) {

      this.Service.deleteHierarchie(id)
      .subscribe({
        next:(res)=>{
          alert('Hierarchie supprimer avec succee')
          this.getHierarchie();
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
