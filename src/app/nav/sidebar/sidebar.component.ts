import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ServicePaie } from 'src/app/service/ServicePaie';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() event = new EventEmitter<void>()

 @ViewChild ('toggle', { static:false})toogle!:ElementRef;

 constructor(private Service:ServicePaie ) { }
 directions!:any[];
 files!: TreeNode[];
 loading!: boolean;
 
 ngOnInit(): void {
   this.getDirection();
 
   }
 public getDirection(){
 
   this.Service.getDirection().subscribe({
 
    next:(res)=>{
     this.directions = res 
     this.files = [];
     this.directions.forEach(d=>{
 
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
    //  console.log( "3",this.files)
    },
    error:(err)=>{
      alert("cette Direction n'existe pas")
    }
   })
  
  
  }
  nodeExpand(event:any) {
 
   this.Service.getDepartement().subscribe({
 
     next:(res)=>{
      let departements = res 
      let nodes:any = [];
      departements.forEach(d=>{
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
      // console.log( "3",this.files)
     },
     error:(err)=>{
       alert("cette Direction n'existe pas")
     }
    })
   }

 toggleButton(){
  this.toogle.nativeElement.styleUrls();
 }

}
