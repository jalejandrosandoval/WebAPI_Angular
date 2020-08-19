//MODULES
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//TOASTR
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Employee
import { EmployeeComponent } from './Components/Employee/Employee/employee.component';
import { EmployeeCreateComponent } from './Components/Employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './Components/Employee/employee-edit/employee-edit.component';

//EmployeeType
import { EmployeeTypeComponent } from './Components/EmployeeType/employee-type/employee-type.component';
import { EmployeeTypeCreateComponent } from './Components/EmployeeType/employee-type-create/employee-type-create.component';
import { EmployeeTypeEditComponent } from './Components/EmployeeType/employee-type-edit/employee-type-edit.component';

//Home
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/Menu/navbar/navbar.component';

//SERVICES

import { EmployeeService } from './Services/Employee/employee.service';
import { EmployeeTypeService } from './Services/EmployeeType/employee-type.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeTypeComponent,
    EmployeeTypeCreateComponent,
    EmployeeTypeEditComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]), 
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-top-right"
    }),
    HttpClientModule    
  ],
  providers: [EmployeeService,EmployeeTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
