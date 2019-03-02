
import { NgModule,  APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TablinkComponent } from './tablink/tablink.component';
import {AccordionModule} from "ng2-accordion";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './notification/notification.component';
import { utils } from 'protractor';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { MatAccordianComponent } from './mat-accordian/mat-accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    TablinkComponent,
    NotificationComponent,
    MatAccordianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule,
    MatTabsModule,
   AccordionModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
