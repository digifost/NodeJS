import { EmployeeModel } from "../../common/helper/models/employee.model";
import { EmployeeRepository } from "../../dataAccess/repository/employeeRepository";

export class EmployeeService
{
  constructor(private employeeRepository:EmployeeRepository)
  {

  }

  //
  async getEmployeeList()
  {   
      return await this.employeeRepository.getEmployees();
  }

  async authenticateEmployee(userName:string,pwd:string)
  {
    console.log('in se');
    return await this.employeeRepository.authenticateEmployee(userName,pwd);
  } 
}