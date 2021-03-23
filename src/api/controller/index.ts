import { EmployeeRepository } from "../../dataAccess/repository/employeeRepository";
import { EmployeeService } from "../../businessLayer/service/employee.service";
import { EmployeeController } from "./employee.controller";


const employeeService = new EmployeeService(new EmployeeRepository());

const employeeController = new EmployeeController(employeeService);

export 
{
    employeeController
}