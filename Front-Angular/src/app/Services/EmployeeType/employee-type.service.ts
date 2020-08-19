import { Injectable } from '@angular/core';
import { EmployeeTypeModel } from 'src/app/Models/EmployeeType/employee-type-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  _IEmployeeTypes: EmployeeTypeModel[];

  readonly ApiPath= '/API/Employee_Type';

  constructor(private http: HttpClient) {
  }

  //Getting EmployeeTypeData through httpClient of Angular -> ApiPath 

  getEmployeeType(): Observable<EmployeeTypeModel[]>{
    return this.http.get<EmployeeTypeModel[]>(this.ApiPath);  
  }

  getEmployeeTypeById(Id: Number): Observable<EmployeeTypeModel>{
    return this.http.get<EmployeeTypeModel>(`${this.ApiPath}/${Id}`);
  }

  postEmployeeType(_IEmployeeTypeModel: EmployeeTypeModel): Observable<EmployeeTypeModel>{
    return this.http.post<EmployeeTypeModel>(this.ApiPath, _IEmployeeTypeModel)
      .pipe(
        map(EmployeeType => {
          return EmployeeType;
        }
      ));
  }

  putEmployeeType(_IEmployeeTypeModel: EmployeeTypeModel): Observable<EmployeeTypeModel>{
    return this.http.put<EmployeeTypeModel>(`${this.ApiPath}/${_IEmployeeTypeModel.id_EmployeeType}`,  _IEmployeeTypeModel);
  }
  
  deleteEmployeeType(IdEmpDelete : number): Observable<any>{
    return this.http.delete<any>(`${this.ApiPath}/${IdEmpDelete}`);
  }
  
}
