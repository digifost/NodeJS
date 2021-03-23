import { EmployeeModel } from "../../common/helper/models/employee.model";
import { EmployeeService } from "../../businessLayer/service/employee.service";
import { Router, Request, Response } from "express";

export class EmployeeController {


    constructor(private employeeService: EmployeeService) {
    }


    authenticateEmployee = async (req: Request, res: Response) => {
        try {
            const body = req.body;
           
            const employeeData = await this.employeeService.authenticateEmployee(body.userName,body.passWord);
            console.log(employeeData);
            res.status(200).send(employeeData)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    }


    getEmployeeList = async (req: Request, res: Response) => {
        try {
            const employeeData = await this.employeeService.getEmployeeList();
            res.status(200).send(employeeData)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    }

}