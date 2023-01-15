import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContratService } from 'src/app/service/ContratService';
import { Contrat } from 'src/model/Contrat';
import { ContratComponent } from '../contrat/contrat.component';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

 Contrat!: Contrat[];
  addCorpsForm!: FormGroup;
  displayedColumns =['employe_id','corp_id','echelon_id','hierarchie_id','statut_id','classe_id','typeContrat_id',
  'embouche','dateFin','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ContratService,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getContrat(){
  
  this.Service.getContrat().subscribe({

   next:(res)=>{
    // console.log("contrats = ",res)
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Contrat n'existe pas")
   }
  })
 
 
 }
 editCorps(element: ContratService){
  this.dialog.open(ContratComponent,{
    width:'900%',
    height: '110%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Contrat'){
     this.getContrat();
   }
 })
  }

  ngOnInit(): void {
    this.getContrat();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(ContratComponent, {
        width: '1080px',
        height:'110%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Contrat'){
            this.getContrat();
          }
        })
    }
    deleteCorps(id:number) {

      this.Service.deleteContrat(id)
      .subscribe({
        next:(res)=>{
          alert('Contrat supprimer avec succee')
          this.getContrat();
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
