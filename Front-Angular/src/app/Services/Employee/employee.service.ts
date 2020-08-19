import { Injectable } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/Employee/employee-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _IEmployees: EmployeeModel[];

  readonly ApiPath= '/API/Employee';

  constructor(private http: HttpClient) {
  }

  //Getting EmployeeData through httpClient of Angular -> ApiPath 

  getEmployee(): Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(this.ApiPath);  
  }

  getEmployeeById(Id: Number): Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${this.ApiPath}/${Id}`);
  }

  postEmployeeType(_IEmployeeModel: EmployeeModel): Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(this.ApiPath, _IEmployeeModel)
      .pipe(
        map(employee => {
          return employee;
        }
      ));
  }

  putEmployee(_IEmployeeModel: EmployeeModel): Observable<EmployeeModel>{
    return this.http.put<EmployeeModel>(`${this.ApiPath}/${_IEmployeeModel.id_Employee}`,  _IEmployeeModel);
  }
  
  deleteEmployee(IdEmpDelete : number): Observable<any>{
    return this.http.delete<any>(`${this.ApiPath}/${IdEmpDelete}`);
  }
  
}
