import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-accordian',
  templateUrl: './mat-accordian.component.html',
  styleUrls: ['./mat-accordian.component.css']
})
export class MatAccordianComponent  {
  isAssignClicked : boolean = true;   
  isPreAssignClicked : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  newAssign(){
    this.isPreAssignClicked = true; 
    if(this.isPreAssignClicked == true){
      this.isAssignClicked = !this.isAssignClicked;
    }
  }

  preAssign(){
    this.isAssignClicked =  true;
    if(this.isAssignClicked ==  true){
      this.isPreAssignClicked = !this.isPreAssignClicked;   
   }
   
  }
}