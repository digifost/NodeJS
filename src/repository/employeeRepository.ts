import { EmployeeModel } from "../models/employee.model";
import { DBHelper } from "./dbHelper";
import sql from 'mssql';
import { SQLParamterModel } from "../models/common/sqlParameter.model";
import { StoredProcedure } from "../helper/database/dbConstants";


export class EmployeeRepository extends DBHelper
{      

    async getEmployees():Promise<EmployeeModel[]>
    {
        console.log('returning data');
        let parameters:SQLParamterModel[] = [
            {
                name:"ab",
                type:sql.NVarChar,
                value:"a"

            }
        ]

        return await this.executeProc(StoredProcedure.getEmployee);
    }
}