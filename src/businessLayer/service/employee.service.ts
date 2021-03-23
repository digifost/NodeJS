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
}