import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/Employee/employee-model';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeTypeModel } from 'src/app/Models/EmployeeType/employee-type-model';
import { EmployeeTypeService } from 'src/app/Services/EmployeeType/employee-type.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //Declarations of Variables 

  _IEmployee: EmployeeModel [];
  EmployeeSelected: EmployeeModel;
  EmpType: EmployeeTypeModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private employeeTypeService: EmployeeTypeService) { }

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

  EmployeeViewForm = this.formBuilder.group({
    id_Users: [''],
    firstName: [''],
    lastName: [''],
    n_Identification: [''],
    employeeType: ['']
  });

  
  getDataByIdModal(_IEmployee: EmployeeModel){

    var Id_Employee = _IEmployee.id_Employee;
    var Id_EmpType = _IEmployee.id_EmpType;

    // this.employeeTypeService.getUsersTypeById(Id_EmpType).subscribe(
    //   res =>
    //   {
    //     this.UType = res,
    //     error => this.getError(error) 
    //   }
    // );

    this.employeeService.getEmployeeById(Id_Employee).subscribe(
      res => 
      {
        this.EmployeeSelected =  res,
        this.EmployeeViewForm = this.formBuilder.group({
          id_Users: [this.EmployeeSelected.id_Employee],
          firstName: [this.EmployeeSelected.firstName],
          lastName: [this.EmployeeSelected.lastName],
          n_Identification: [this.EmployeeSelected.numberDocument],
          userType: [this.EmployeeSelected.id_EmpType]
        }),
        error => this.getError(error) 
      }
    );   

  }



}