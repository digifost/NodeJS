import express from 'express';
import { authMiddleware } from '../auth/auth.middleware';
import { DepartmentRepository } from '../../dataAccess/repository/department.repository';
import { EmployeeRepository } from '../../dataAccess/repository/employeeRepository';
import { DepartmentService } from '../../businessLayer/service/department.service';
import { EmployeeService } from '../../businessLayer/service/employee.service';
import { DepartmentRouter } from './department.route';
import { EmployeeRouter } from './employee.route'



const router = express.Router();
router.use('/department',authMiddleware,DepartmentRouter(router,new DepartmentService(new DepartmentRepository)));
router.use('/employee',authMiddleware,EmployeeRouter(router));



export default router;