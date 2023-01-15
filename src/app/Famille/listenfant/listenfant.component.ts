import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceFamille } from 'src/app/service/ServiceFamile';
import { Famille } from 'src/model/Famillle';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-listenfant',
  templateUrl: './listenfant.component.html',
  styleUrls: ['./listenfant.component.css']
})
export class ListenfantComponent implements OnInit {
  Enfant!: Famille[];
  displayedColumns =['nom','prenom','dateNaissance','lieuNaiss','numeroRegistre','employe_id','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceEnfant:ServiceFamille,
   private dialog: MatDialog){}
   
  // ngAfterViewInit(): void {

  //   throw new Error('Method not implemented.');
  // }

 ngOnInit(){
  this.getEnfant();

}

 public getEnfant(){

 this.ServiceEnfant.getEnfant().subscribe({

  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("cette Enfant n'existe pas")
  }
 })


}

editEnfant(element:Famille){
  
this.dialog.open(EnfantComponent,{
    width:'700px',
    height: '160%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Enfant'){
     this.getEnfant();
   }
 })

}

deleteEnfant(id:number) {

  this.ServiceEnfant.deleteEnfant(id)
  .subscribe({
    next:(res)=>{
      alert(' Agent supprimer avec succee')
      this.getEnfant();
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
  const dialogRef = this.dialog.open(EnfantComponent, {
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter Enfant'){
        this.getEnfant();
      }
    })
}
}

