import { Router,Request,Response } from "express";
import { EmployeeService } from "../service/employee.service";

export const EmployeeRouter = (router:Router,service:EmployeeService):Router=>
{
    router.get('/', async(req:Request,res:Response)=>
    {
        try {
            const data = await service.GetEmployeeList();
            res.status(200).send(data)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    })

    return router;
};