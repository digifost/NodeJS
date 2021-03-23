import { DepartmentRepository } from "../repository/department.repository";

export class DepartmentService
{

    constructor(private departmentRepo:DepartmentRepository)
    {

    }

    async getDepartment()
    {
        return this.departmentRepo.getDepartment();
    }

}