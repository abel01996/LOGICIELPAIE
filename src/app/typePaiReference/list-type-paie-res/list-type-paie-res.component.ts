import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddTypePaieReferenceComponent } from '../add-type-paie-reference/add-type-paie-reference.component';

@Component({
  selector: 'app-list-type-paie-res',
  templateUrl: './list-type-paie-res.component.html',
  styleUrls: ['./list-type-paie-res.component.css']
})
export class ListTypePaieResComponent implements OnInit {
  TypePaieapp!: ModelPaie[];
  addTypePaieForm!: FormGroup;
  displayedColumns =['typePaieRef','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
 ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}
public getPaie(){
  
  this.Service.getTypepaieRef().subscribe({
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
  this.dialog.open(AddTypePaieReferenceComponent,{
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
      const dialogRef = this.dialog.open(AddTypePaieReferenceComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter TypePaie'){
            this.getPaie();
          }
        })
    }
    deleteTypePaie(id:number) {

      this.Service.deleteTypePaieRef(id)
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
