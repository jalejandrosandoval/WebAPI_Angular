import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/Employee/Employee/employee.component';
import { EmployeeCreateComponent } from './Components/Employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './Components/Employee/employee-edit/employee-edit.component';
import { EmployeeTypeComponent } from './Components/EmployeeType/EmployeeType/employee-type/employee-type.component';
import { EmployeeTypeCreateComponent } from './Components/EmployeeType/EmployeeType/employee-type-create/employee-type-create.component';
import { EmployeeTypeEditComponent } from './Components/EmployeeType/EmployeeType/employee-type-edit/employee-type-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeTypeComponent,
    EmployeeTypeCreateComponent,
    EmployeeTypeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
