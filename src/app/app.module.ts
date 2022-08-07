import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './Properties/property-list/property-list/property-list.component';
import { NavComponent } from './nav/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from '@angular/material/icon';
import { PropertyCardComponent } from './Properties/property-card/property-card/property-card.component';
import { VerifytestComponent } from './users/user-verify/user-verify.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyDetailComponent } from './Properties/property-detail/property-detail/property-detail.component';
import { PropertyCreateComponent } from './properties/property-create/property-create/property-create.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { TextTextareaComponent } from './_forms/text-textarea/text-textarea/text-textarea.component';



@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    NavComponent,
    PropertyCardComponent,
    VerifytestComponent,
    PropertyDetailComponent,
    PropertyCreateComponent,
    TextInputComponent,
    TextTextareaComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
