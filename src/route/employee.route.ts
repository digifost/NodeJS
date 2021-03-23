import { Router,Request,Response } from "express";
import { EmployeeModel } from "../models/employee.model";
import { EmployeeService } from "../service/employee.service";

export const EmployeeRouter = (router:Router,service:EmployeeService):Router=>
{
    router.get('/data1/', async(req:Request,res:Response)=>
    {
      
        try {
            console.log('route start');
            const employeeData = await service.getEmployeeList();
            console.log('route end');
            res.status(200).send(employeeData)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    })

    return router;
};