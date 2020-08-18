import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '',  component: HomeComponent},

  //Employees
  { path: 'employees',  component: EmployeeComponent },
  { path: 'employees/create',  component: EmployeeCreateComponent},
  { path: 'employees/edit',  component: EmployeeEditComponent},

  //EmployeesType
  { path: 'employeesTypes',  component: EmployeeTypeComponent},
  { path: 'employeesTypes/create',  component: EmployeeTypeCreateComponent},
  { path: 'employeesTypes/edit',  component: EmployeeTypeEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
