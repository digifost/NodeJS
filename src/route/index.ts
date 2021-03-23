import express from 'express';
import { DepartmentRepository } from '../repository/department.repository';
import { EmployeeRepository } from '../repository/employeeRepository';
import { DepartmentService } from '../service/department.service';
import { EmployeeService } from '../service/employee.service';
import { DepartmentRouter } from './department.route';
import { EmployeeRouter } from './employee.route'



const router = express.Router();
router.use('/department',DepartmentRouter(router,new DepartmentService(new DepartmentRepository)));
router.use('/employee',EmployeeRouter(router,new EmployeeService(new EmployeeRepository)));



export default router;