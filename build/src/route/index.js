"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeRepository_1 = require("../repository/employeeRepository");
const employee_service_1 = require("../service/employee.service");
const employee_route_1 = require("./employee.route");
const router = express_1.default.Router();
router.use('/employee', employee_route_1.EmployeeRouter(router, new employee_service_1.EmployeeService(new employeeRepository_1.EmployeeRepository)));
exports.default = router;
