import { Component, OnInit, Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { Direct } from 'protractor/built/driverProviders';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent  {
  isClicked: boolean;
  isPreClicked: boolean;
  isOpen: boolean;
  constructor() { }

    ngOnInit() {
    }
    onDropdownToggle() {
     this.isOpen = !this.isOpen;
    }

    newAssign(){
      this.isClicked = !this.isClicked
    }

    preAssign(){
      this.isPreClicked = !this.isPreClicked
    }
 
  log(x){
    console.log(x);
  }
  
  submit(f){
    console.log(f);
  }
 
  // preAssign(){
  //   this.isClicked = !this.isClicked
  // };

 
}

