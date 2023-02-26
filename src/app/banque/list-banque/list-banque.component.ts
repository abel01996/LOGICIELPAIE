import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddBanqueComponent } from '../add-banque/add-banque.component';

@Component({
  selector: 'app-list-banque',
  templateUrl: './list-banque.component.html',
  styleUrls: ['./list-banque.component.css']
})
export class ListBanqueComponent implements OnInit {

  banque!: ModelPaie[];
  addBanqueForm!: FormGroup;
  displayedColumns =['code','nomBanque','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private ServiceBanque:ServicePaie,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getBanque(){
  this.ServiceBanque.getBanque().subscribe({
   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette banque n'existe pas")
   }
  })
 
 
 }
 editBanque(element: ServicePaie){
  this.dialog.open(AddBanqueComponent,{
    width:'35%',
    height: '70%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour banque'){
     this.getBanque();
   }
 })
  }

  ngOnInit(): void {
    this.getBanque();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddBanqueComponent, {
        width: '700px',
        height:'70%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Banque'){
            this.getBanque();
          }
        })
    }
    deleteBanque(id:number) {

      this.ServiceBanque.deleteBanque(id)
      .subscribe({
        next:(res)=>{
          alert('Banque supprimer avec succee')
          this.getBanque();
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
