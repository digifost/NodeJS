import express from 'express';
import { EmployeeService } from '../service/employee.service';
import { EmployeeRouter } from './employee.route'



const router = express.Router();
router.use('/employee',EmployeeRouter(router,new EmployeeService()));

export default router;