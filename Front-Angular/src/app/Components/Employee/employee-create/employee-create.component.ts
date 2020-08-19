import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/Employee/employee.service';
import { EmployeeTypeService } from 'src/app/Services/EmployeeType/employee-type.service';
import { EmployeeModel } from 'src/app/Models/Employee/employee-model';
import { EmployeeTypeModel } from 'src/app/Models/EmployeeType/employee-type-model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  _IEmployee: EmployeeModel[];
  _IEmployeeType: EmployeeTypeModel[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private employeeTypeService: EmployeeTypeService) { }

  ngOnInit(): void {
    this.getEmployeeType();
  }

  

  EmployeeCreateForm = this.formBuilder.group({
    id_Users: [''],
    firstName: [''],
    lastName: [''],
    n_Identification: [''],
    employeeType: ['']
  });

  getEmployeeType(){
    this.employeeTypeService.getEmployeeType()
      .subscribe(
        res => {
          this._IEmployeeType = res
        }
      );
  }
  
}
