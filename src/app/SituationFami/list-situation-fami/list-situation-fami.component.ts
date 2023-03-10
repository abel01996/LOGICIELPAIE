import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SituaFamilleService } from 'src/app/service/SituaFamilleService';
import { SituaFamille } from 'src/model/SituaFamille';
import { AddSituationFamilleComponent } from '../add-situation-famille/add-situation-famille.component';

@Component({
  selector: 'app-list-situation-fami',
  templateUrl: './list-situation-fami.component.html',
  styleUrls: ['./list-situation-fami.component.css']
})
export class ListSituationFamiComponent implements OnInit {

  
  employer!: SituaFamille[];
  displayedColumns =['nbrEpouse','nbrEnfant','nbrPartFical','nbrPartImpot','nbrDenfantPrest', 'totalEnfant','jourBase','nbreJourPresence','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceEmployer: SituaFamilleService,
   private dialog: MatDialog){}
   
  ngAfterViewInit(): void {

    throw new Error('Method not implemented.');
  }

 ngOnInit(){
  this.getEmployer();

}

 public getEmployer(){

 this.ServiceEmployer.getSituaFamille().subscribe({

  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("cette employer n'existe pas")
  }
 })


}

editEmployer(element: SituaFamille){
  
this.dialog.open(AddSituationFamilleComponent,{
    width:'35%',
    height: '160%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour employe'){
     this.getEmployer();
   }
 })

}

deleteEmployer(id:number) {

  this.ServiceEmployer.deleteSituaFamille(id)
  .subscribe({
    next:(res)=>{
      alert('Employer supprimer avec succee')
      this.getEmployer();
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
  const dialogRef = this.dialog.open(AddSituationFamilleComponent, {
    width: '700px',
    height:'160%'
  }).afterClosed().subscribe(val =>{
       if(val==='Ajouter employe'){
        this.getEmployer();
      }
    })
}
}

