import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { AddCorpsComponent } from '../add-corps/add-corps.component';

@Component({
  selector: 'app-list-corps',
  templateUrl: './list-corps.component.html',
  styleUrls: ['./list-corps.component.css']
})
export class ListCorpsComponent implements OnInit {
  Corps!: ModelPaie[];
  addCorpsForm!: FormGroup;
  displayedColumns =['code','nomCorps','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getCorps(){
  
  this.Service.getCorps().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Corps n'existe pas")
   }
  })
 
 
 }
 editCorps(element: ServicePaie){
  this.dialog.open(AddCorpsComponent,{
    width:'35%',
    height: '50%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Corps'){
     this.getCorps();
   }
 })
  }

  ngOnInit(): void {
    this.getCorps();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(AddCorpsComponent, {
        width: '700px',
        height:'50%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Corps'){
            this.getCorps();
          }
        })
    }
    deleteCorps(id:number) {

      this.Service.deleteCorps(id)
      .subscribe({
        next:(res)=>{
          alert('Corps supprimer avec succee')
          this.getCorps();
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
