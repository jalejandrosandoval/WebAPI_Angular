import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/Employee/employee-model';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //Declarations of Variables 

  _IEmployee: EmployeeModel [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getData();
  }

  //Getting Employees Informations from WebAPI

  getData() {
    this.employeeService
      .getEmployee()
      .subscribe(Employees_AWS => this._IEmployee = Employees_AWS,
        error => this.getError(error));
  }

  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
   
  }

}