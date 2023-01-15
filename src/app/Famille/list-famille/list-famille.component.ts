import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceFamille } from 'src/app/service/ServiceFamile';
import { Famille } from 'src/model/Famillle';
import { AddFamilleComponent } from '../add-famille/add-famille.component';

@Component({
  selector: 'app-list-famille',
  templateUrl: './list-famille.component.html',
  styleUrls: ['./list-famille.component.css']
})
export class ListFamilleComponent implements OnInit {

  epouse!: Famille[];
  displayedColumns =['nomEpouse','prenomEpouse','profession','dateNaissanceEpouse','tel','mariage','employe_id','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceEpouse:ServiceFamille,
   private dialog: MatDialog){}
   
  // ngAfterViewInit(): void {

  //   throw new Error('Method not implemented.');
  // }

 ngOnInit(){
  this.getEpouse();

}

 public getEpouse(){

 this.ServiceEpouse.getEpouse().subscribe({

  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("cette Epoux(se) n'existe pas")
  }
 })


}

editEpouse(element:Famille){
  
this.dialog.open(AddFamilleComponent,{
    width:'700px',
    height: '160%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Epoux(se)'){
     this.getEpouse();
   }
 })

}

deleteEpouse(id:number) {

  this.ServiceEpouse.deleteEpouse(id)
  .subscribe({
    next:(res)=>{
      alert(' Epoux(se) supprimer avec succee')
      this.getEpouse();
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
openDialog() {
  const dialogRef = this.dialog.open(AddFamilleComponent, {
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter Epoux(se)'){
        this.getEpouse();
      }
    })
}
}

