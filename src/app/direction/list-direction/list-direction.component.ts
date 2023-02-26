import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService, TreeNode } from 'primeng/api';
import { ServiceEmployer } from 'src/app/service/ServiceEmploye';
import { ServicePaie } from 'src/app/service/ServicePaie';
import { ModelPaie } from 'src/model/ModelPaie';
import { DirectionComponent } from '../direction/direction.component';


@Component({
  selector: 'app-list-direction',
  templateUrl: './list-direction.component.html',
  styleUrls: ['./list-direction.component.css']
  
})
export class ListDirectionComponent implements OnInit {

  Direction!: ModelPaie[];
  addDirectionForm!: FormGroup;
  displayedColumns = ['nomDirection', 'action'];
  dataSource!: MatTableDataSource<any>;
  loading!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private Service: ServicePaie, private dialog: MatDialog,
     private serviceEmp: ServiceEmployer,private messageService: MessageService) { }
  directions!: any[];
  files!: TreeNode[];
  service!: any[];
  selectedFiles1!:TreeNode;

  public getDirection() {

    this.Service.getDirection().subscribe({

      next: (res) => {
        this.directions = res
        this.files = [];
        this.directions.forEach(d => {

          this.files.push({
            label: d.nomDirection,
            data: d,
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
            children: [],
            leaf: false

          })
        })
        this.loading = false
        console.log("3", this.files)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("cette Direction n'existe pas")
      }
    })


  }


  nodeExpand(event: any) {
    console.log('event',event)
    let id = event.node.data.id;
    this.Service.getDepartementTree(id).subscribe({
    next: (res) => {
        let departements = res
        let nodes: any = [];
        departements.forEach(d => {
          nodes.push({
            label: d.nomDepartement,
            data: d,
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
            children: [],
            leaf: false

          })
        })
        event.node.children = nodes
        this.loading = false
        // console.log("3", this.files)
      },
      error: (err) => {
        alert("cette Direction n'existe pas")
      }

    })
  
  }
node(event:any){
  let id = event.node.data.id;
  this.Service.getServiceTree(id).subscribe({
    next: (res) => {
    let service = res
    let services: any = [];
    service.forEach(d  => {
      services.push({
        label:d.nomService,
        expandedIcon: "pi pi-file-open",
        collapsedIcon: "pi pi-file",
        children:[],
     })
 })
 event.node.children = services
      this.loading = false
     
 }
  });  
}

/////////esayy/////////

getSelected(event:any){
  this.messageService.add({ 
    detail:event.node.data
  });
   console.log('eventq',event.node.data)
}

  editDirection(element: ServicePaie) {
    this.dialog.open(DirectionComponent, {
      width: '35%',
      height: '50%',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === 'mise a jour Direction') {
        this.getDirection();
      }
    })
  }

  ngOnInit(): void {
    this.getDirection();

  }

  openDialog() {
    const dialogRef = this.dialog.open(DirectionComponent, {
      width: '700px',
      height: '50%'
    }).afterClosed().subscribe(val => {
      if (val === 'Ajouter Direction') {
        this.getDirection();
      }
    })
  }
  deleteDirection(id: number) {

    this.Service.deleteDirection(id)
      .subscribe({
        next: (res) => {
          alert('Direction supprimer avec succee')
          this.getDirection();
        },
        error: () => {
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
