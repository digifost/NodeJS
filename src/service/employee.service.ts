import { EmployeeModel } from "../models/employee.model";
import { EmployeeRepository } from "../repository/employeeRepository";

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