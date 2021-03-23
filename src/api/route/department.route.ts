import { Router,Request,Response } from "express";
import { DepartmentService } from "../../businessLayer/service/department.service";

export const DepartmentRouter = (router:Router,service:DepartmentService):Router=>
{
    router.get('/data/', async(req:Request,res:Response)=>
    {
        console.log('here in dept');
        try {
            const data = await service.getDepartment();
            res.status(200).send(data)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    })

    return router;
};