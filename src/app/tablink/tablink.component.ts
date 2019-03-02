import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tablink',
  templateUrl: './tablink.component.html',
  styleUrls: ['./tablink.component.css']
})
export class TablinkComponent implements OnInit {
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
