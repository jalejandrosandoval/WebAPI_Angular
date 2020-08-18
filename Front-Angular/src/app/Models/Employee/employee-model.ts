import { EmployeeTypeModel } from '../EmployeeType/employee-type-model'

export interface EmployeeModel {

    id_Employee: number,
    firstName: string,
    lastName: string,
    numberDocument: string,
    id_EmpType: number,
    employee_Type: EmployeeTypeModel[]

}
