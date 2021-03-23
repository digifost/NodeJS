import { Router,Request,Response } from "express";
import { employeeController } from "../controller";
import { EmployeeController } from "../controller/employee.controller";


export const EmployeeRouter = (router:Router):Router=>
{
    router.get('/employeeList',employeeController.getEmployeeList)
    router.post('/authenticateEmployee',employeeController.authenticateEmployee)

    return router;
};