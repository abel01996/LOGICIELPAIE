import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, MatSortHeader } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { RubriqueComponent } from '../rubrique/rubrique.component';

@Component({
  selector: 'app-listrubrique',
  templateUrl: './listrubrique.component.html',
  styleUrls: ['./listrubrique.component.css']
})
export class ListrubriqueComponent implements OnInit {

  rubrique!: any;
  addRubriqueForm!: FormGroup;
  displayedColumns =['codeFiche','rubriqueFiche','montantFiche','action'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<any>;
  // table: any;
  
 constructor( private Service:ServicePaie,private dialog: MatDialog){}
   
//  ngAfterViewInit(): void {
//   throw new Error('Method not implemented.');
// }
public getRubrique(){
  
  this.Service.getRubriqueFiche().subscribe({

   next:(res)=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
     this.sort.sort(({ id: 'codeFiche', start: 'asc'}) as MatSortable);
     this.dataSource.sort = this.sort;
   },
   error:(err)=>{
     alert("cette Rubrique n'existe pas")
   }

  })
 
 
 }
 
 editRubrique(element: ServicePaie){
  this.dialog.open(RubriqueComponent,{
    width:'35%',
    height: '90%',
    data: element
  }).afterClosed().subscribe(val =>{
    if(val==='mise a jour Rubrique'){
     this.getRubrique();
   }
 })
  }

  ngOnInit(): void {
    this.getRubrique();
  
    }
 
    openDialog() {
      const dialogRef = this.dialog.open(RubriqueComponent, {
        width: '700px',
        height:'90%'
      }).afterClosed().subscribe(val =>{
           if(val==='Ajouter Rubrique'){
            this.getRubrique();
          }
        })
    }
    deleteRubrique(id:number) {

      this.Service.deleteRubriqueFiche(id)
      .subscribe({
        next:(res)=>{
          alert('Rubrique supprimer avec succee')
          this.getRubrique();
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
  // reoder table
  drop(event: CdkDragDrop<any>) {
    const previousIndex = this.dataSource.data.findIndex(row => row === event.item.data);
    moveItemInArray(this.dataSource.data,previousIndex,event.currentIndex);
    this.table.renderRows();
  }
}
