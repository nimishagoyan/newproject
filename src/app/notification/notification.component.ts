import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
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
