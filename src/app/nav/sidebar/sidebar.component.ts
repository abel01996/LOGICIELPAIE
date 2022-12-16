import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() event = new EventEmitter<void>()

 @ViewChild ('toggle', { static:false})toogle!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
 toggleButton(){
  this.toogle.nativeElement.styleUrls();
 }

}
