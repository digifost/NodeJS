import { EmployeeModel } from "../../common/helper/models/employee.model";
import { DBHelper } from "./dbHelper";
import sql from 'mssql';
import { SQLParamterModel } from "../../common/helper/models/sqlParameter.model";
import { StoredProcedure } from "../../common/helper/constants/dbConstants";


export class EmployeeRepository extends DBHelper
{      

    async getEmployees():Promise<EmployeeModel[]>
    {
        console.log('returning data');
        let parameters:SQLParamterModel[] = [
            {
                name:"name" ,
                type:sql.NVarChar,
                value:"chetan"

            }
        ]

        return await this.executeProc(StoredProcedure.getEmployee,parameters);
    }
}
